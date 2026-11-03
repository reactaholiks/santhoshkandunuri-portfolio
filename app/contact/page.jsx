'use client'

import { useState } from 'react'
import { profile, socials } from '@/data/portfolio'
import { Mail, MapPin, Phone, ArrowRight, iconByName } from '@/components/Icons'
import Reveal from '@/components/Reveal'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'fail' | null
  const [sending, setSending] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    if (!validate()) return

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('fail')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Contact</span>
            <h1 className="section-title">Let's work together</h1>
            <p className="section-subtitle">
              Have a role, a project or an idea in mind? Send a message and I'll get back to you.
            </p>
          </Reveal>

          <div className="contact-grid">
            {/* LEFT — contact info */}
            <Reveal className="contact-info">
              <p className="lead">
                I'm open to frontend and full-stack opportunities, freelance work
                and collaborations. The fastest way to reach me is email.
              </p>

              <div className="contact-methods">
                <a className="card contact-method" href={`mailto:${profile.email}`}>
                  <span className="ico"><Mail width={20} height={20} /></span>
                  <div><div className="k">Email</div><div className="v">{profile.email}</div></div>
                </a>
                <a className="card contact-method" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <span className="ico"><Phone width={20} height={20} /></span>
                  <div><div className="k">Phone</div><div className="v">{profile.phone}</div></div>
                </a>
                <div className="card contact-method">
                  <span className="ico"><MapPin width={20} height={20} /></span>
                  <div><div className="k">Location</div><div className="v">{profile.location}</div></div>
                </div>
              </div>

              <div className="socials">
                {socials.map((s) => {
                  const Icon = iconByName[s.icon]
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      className="social-btn"
                      aria-label={s.label}
                      target={s.url.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {Icon ? <Icon /> : s.label[0]}
                    </a>
                  )
                })}
              </div>
            </Reveal>

            {/* RIGHT — form */}
            <Reveal delay={120}>
              <form className="card form-card" onSubmit={onSubmit} noValidate>
                {status === 'success' && (
                  <div className="form-status success">
                    Thanks! Your message has been sent — I'll reply soon.
                  </div>
                )}
                {status === 'fail' && (
                  <div className="form-status fail">
                    Couldn't send right now. Please email me directly at {profile.email}.
                  </div>
                )}

                <div className={`field ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name" type="text" value={form.name}
                    onChange={update('name')} placeholder="Your name"
                  />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>

                <div className={`field ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" type="email" value={form.email}
                    onChange={update('email')} placeholder="you@example.com"
                  />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
                  <input
                    id="subject" type="text" value={form.subject}
                    onChange={update('subject')} placeholder="What's this about?"
                  />
                </div>

                <div className={`field ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" value={form.message}
                    onChange={update('message')} placeholder="Tell me a little about it…"
                  />
                  {errors.message && <span className="err">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={sending}>
                  {sending ? (
                    <><span className="spinner" /> Sending…</>
                  ) : (
                    <>Send message <ArrowRight className="arrow" width={18} height={18} /></>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
