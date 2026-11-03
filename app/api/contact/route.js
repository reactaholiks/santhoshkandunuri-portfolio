// ============================================================================
//  CONTACT API — Next.js Route Handler + Nodemailer
// ----------------------------------------------------------------------------
//  This IS the backend. Next.js runs it on the server (no separate Express
//  app). The React contact form POSTs here; we validate and send the email.
//  Secrets come from .env.local (server-only, never shipped to the browser).
// ============================================================================

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Nodemailer needs the Node.js runtime (not the Edge runtime).
export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 })
  }

  const { name, email, subject, message } = body || {}

  // --- Validation (server-side, never trust the client) ---
  const errors = {}
  if (!name || !name.trim()) errors.name = 'Name is required.'
  if (!email || !email.trim()) errors.email = 'Email is required.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Email is invalid.'
  if (!message || !message.trim()) errors.message = 'Message is required.'
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { ok: false, error: 'Email service is not configured. Add SMTP settings to .env.local.' },
      { status: 503 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const to = process.env.CONTACT_TO || SMTP_USER
  const safeSubject = (subject && subject.trim()) || 'New message from your portfolio'

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${safeSubject}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${safeSubject}\n\n` +
        `${message}\n`,
      html:
        `<h2 style="margin:0 0 12px">New portfolio message</h2>` +
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>` +
        `<hr/><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('sendMail failed:', err.message)
    return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 502 })
  }
}
