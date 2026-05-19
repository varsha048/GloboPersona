import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { segments } from '../data/mockData'
import {
  Mail, Linkedin, ChevronRight, ChevronLeft, Check,
  Users, Calendar, Send, AlertCircle, ArrowLeft, Sparkles
} from 'lucide-react'

const STEPS = [
  { id: 1, label: 'Details',   icon: Mail },
  { id: 2, label: 'Audience',  icon: Users },
  { id: 3, label: 'Schedule',  icon: Calendar },
  { id: 4, label: 'Review',    icon: Send },
]

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {STEPS.map((s, i) => {
        const Icon = s.icon
        const done = s.id < current
        const active = s.id === current
        return (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200
                ${done   ? 'bg-brand-500 text-white' :
                  active ? 'bg-brand-500 text-white ring-4 ring-brand-100' :
                            'bg-surface-100 text-surface-400'}
              `}>
                {done ? <Check size={16} /> : <Icon size={16} />}
              </div>
              <p className={`text-xs mt-1.5 font-medium ${active ? 'text-brand-600' : 'text-surface-400'}`}>
                {s.label}
              </p>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-3 mb-5 transition-all duration-300 ${
                s.id < current ? 'bg-brand-500' : 'bg-surface-100'
              }`} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

// ─── Step 1: Details ─────────────────────────────────────────────────────────
function StepDetails({ data, onChange }) {
  return (
    <div className="space-y-5 animate-fade-in-up">
      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-1.5">Campaign Name *</label>
        <input
          className="input"
          placeholder="e.g. Summer Product Launch 2025"
          value={data.name}
          onChange={e => onChange('name', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-2">Channel *</label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'email',    label: 'Email',    Icon: Mail,     desc: 'Send emails to your contacts' },
            { value: 'linkedin', label: 'LinkedIn', Icon: Linkedin, desc: 'Outreach on LinkedIn' },
          ].map(({ value, label, Icon, desc }) => (
            <button
              key={value}
              type="button"
              onClick={() => onChange('channel', value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                data.channel === value
                  ? 'border-brand-400 bg-brand-50'
                  : 'border-surface-200 hover:border-surface-300 bg-white'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 ${
                data.channel === value ? 'bg-brand-500' : 'bg-surface-100'
              }`}>
                <Icon size={17} className={data.channel === value ? 'text-white' : 'text-surface-400'} />
              </div>
              <p className={`font-semibold text-sm ${data.channel === value ? 'text-brand-700' : 'text-surface-700'}`}>{label}</p>
              <p className="text-xs text-surface-400 mt-0.5">{desc}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-1.5">Subject Line *</label>
        <div className="relative">
          <input
            className="input pr-24"
            placeholder="Write a compelling subject…"
            value={data.subject}
            onChange={e => onChange('subject', e.target.value)}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 btn-ghost btn-sm gap-1 text-brand-500 hover:bg-brand-50">
            <Sparkles size={12} /> AI
          </button>
        </div>
        <p className="text-xs text-surface-400 mt-1">Tip: 40–60 characters performs best</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-1.5">Preview Text</label>
        <input
          className="input"
          placeholder="Short preview shown in inbox…"
          value={data.previewText}
          onChange={e => onChange('previewText', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-1.5">Email Body *</label>
        <textarea
          className="input min-h-[140px] resize-none"
          placeholder="Write your email content here, or use our drag-and-drop builder…"
          value={data.body}
          onChange={e => onChange('body', e.target.value)}
        />
      </div>
    </div>
  )
}

// ─── Step 2: Audience ─────────────────────────────────────────────────────────
function StepAudience({ data, onChange }) {
  return (
    <div className="space-y-5 animate-fade-in-up">
      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-1.5">Select Segment *</label>
        <div className="space-y-2">
          {segments.map(seg => (
            <button
              key={seg.id}
              type="button"
              onClick={() => onChange('segment', seg.id)}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border-2 text-left transition-all ${
                data.segment === seg.id
                  ? 'border-brand-400 bg-brand-50'
                  : 'border-surface-200 hover:border-surface-300 bg-white'
              }`}
            >
              <div>
                <p className={`font-semibold text-sm ${data.segment === seg.id ? 'text-brand-700' : 'text-surface-700'}`}>
                  {seg.name}
                </p>
                <p className="text-xs text-surface-400 mt-0.5">{seg.description}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${data.segment === seg.id ? 'text-brand-600' : 'text-surface-600'}`}>
                  {seg.count.toLocaleString()}
                </p>
                <p className="text-xs text-surface-400">contacts</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Step 3: Schedule ─────────────────────────────────────────────────────────
function StepSchedule({ data, onChange }) {
  return (
    <div className="space-y-5 animate-fade-in-up">
      <div>
        <label className="block text-sm font-semibold text-surface-700 mb-2">Send Timing *</label>
        <div className="space-y-2.5">
          {[
            { value: 'now',       label: 'Send immediately',       desc: 'Campaign starts right away' },
            { value: 'scheduled', label: 'Schedule for later',     desc: 'Pick a specific date and time' },
            { value: 'optimized', label: 'Send-time optimization', desc: 'AI picks the best time per contact' },
          ].map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange('timing', opt.value)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                data.timing === opt.value
                  ? 'border-brand-400 bg-brand-50'
                  : 'border-surface-200 hover:border-surface-300 bg-white'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                data.timing === opt.value ? 'border-brand-500' : 'border-surface-300'
              }`}>
                {data.timing === opt.value && <div className="w-2 h-2 rounded-full bg-brand-500" />}
              </div>
              <div>
                <p className={`font-semibold text-sm ${data.timing === opt.value ? 'text-brand-700' : 'text-surface-700'}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-surface-400 mt-0.5">{opt.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {data.timing === 'scheduled' && (
        <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
          <div>
            <label className="block text-sm font-semibold text-surface-700 mb-1.5">Date *</label>
            <input type="date" className="input" value={data.date} onChange={e => onChange('date', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-surface-700 mb-1.5">Time *</label>
            <input type="time" className="input" value={data.time} onChange={e => onChange('time', e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-surface-700 mb-1.5">Timezone</label>
            <select className="input">
              <option>Asia/Kolkata (IST) +5:30</option>
              <option>UTC</option>
              <option>America/New_York (EST)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Step 4: Review ──────────────────────────────────────────────────────────
function StepReview({ data }) {
  const seg = segments.find(s => s.id === data.segment)
  const timingLabel = { now: 'Send immediately', scheduled: `${data.date || '—'} at ${data.time || '—'}`, optimized: 'AI-optimized' }

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
        <AlertCircle size={16} className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-700">Please review your campaign details carefully before launching.</p>
      </div>

      {[
        { label: 'Campaign Name',  value: data.name     || '—' },
        { label: 'Channel',        value: data.channel  || '—' },
        { label: 'Subject Line',   value: data.subject  || '—' },
        { label: 'Audience',       value: seg ? `${seg.name} (${seg.count.toLocaleString()} contacts)` : '—' },
        { label: 'Send Timing',    value: timingLabel[data.timing] || '—' },
      ].map(row => (
        <div key={row.label} className="flex justify-between py-3 border-b border-surface-100 last:border-0">
          <p className="text-sm text-surface-500 font-medium">{row.label}</p>
          <p className="text-sm text-surface-800 font-semibold max-w-[60%] text-right">{row.value}</p>
        </div>
      ))}

      {data.body && (
        <div>
          <p className="text-sm text-surface-500 font-medium mb-2">Email Body Preview</p>
          <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 text-sm text-surface-600 max-h-32 overflow-y-auto">
            {data.body}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function CreateCampaign() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '', channel: 'email', subject: '', previewText: '', body: '',
    segment: null, timing: 'now', date: '', time: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => setForm(f => ({ ...f, [key]: value }))

  const canNext = () => {
    if (step === 1) return form.name && form.channel && form.subject && form.body
    if (step === 2) return form.segment !== null
    if (step === 3) return form.timing
    return true
  }

  const handleLaunch = () => setSubmitted(true)

  if (submitted) {
    return (
      <Layout title="Create Campaign">
        <div className="max-w-lg mx-auto mt-16 text-center animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
            <Check size={36} className="text-emerald-500" />
          </div>
          <h2 className="font-display text-2xl font-bold text-surface-900 mb-2">Campaign Launched! 🎉</h2>
          <p className="text-surface-500 mb-6">
            <strong className="text-surface-700">{form.name}</strong> is now{' '}
            {form.timing === 'now' ? 'sending to your audience.' : 'scheduled and ready to go.'}
          </p>
          <div className="flex items-center justify-center gap-3">
            <button onClick={() => navigate('/campaigns')} className="btn-primary">
              View Campaigns
            </button>
            <button onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'',channel:'email',subject:'',previewText:'',body:'',segment:null,timing:'now',date:'',time:'' }) }} className="btn-secondary">
              Create Another
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Create Campaign" subtitle="Set up a new email or LinkedIn campaign">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate('/campaigns')} className="btn-ghost btn-sm gap-1.5 mb-6 -ml-1">
          <ArrowLeft size={14} /> Back to Campaigns
        </button>

        <div className="card p-8">
          <StepIndicator current={step} />

          <div className="min-h-[340px]">
            {step === 1 && <StepDetails  data={form} onChange={update} />}
            {step === 2 && <StepAudience data={form} onChange={update} />}
            {step === 3 && <StepSchedule data={form} onChange={update} />}
            {step === 4 && <StepReview   data={form} />}
          </div>

          {/* Footer nav */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-100">
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
              className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={15} /> Back
            </button>
            <p className="text-xs text-surface-400 font-medium">Step {step} of {STEPS.length}</p>
            {step < 4 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canNext()}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ChevronRight size={15} />
              </button>
            ) : (
              <button onClick={handleLaunch} className="btn-primary gap-2">
                <Send size={14} /> Launch Campaign
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
