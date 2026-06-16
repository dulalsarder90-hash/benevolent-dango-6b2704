'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Bot,
  ShieldCheck,
  Webhook,
  Sparkles,
  Activity,
  CheckCircle2,
  Loader2,
  Cpu,
  Radio,
} from 'lucide-react'

type Log = { id: number; text: string; status: 'pending' | 'done' }

const scriptSteps = [
  'Gemini AI কানেকশন স্থাপন হচ্ছে...',
  'সোর্স ফিড থেকে তথ্য সংগ্রহ (n8n webhook)...',
  'অটোমেটেড ফ্যাক্ট-চেক চলছে...',
  'ভার্চুয়াল অ্যাঙ্কর স্ক্রিপ্ট জেনারেট হচ্ছে...',
  'কন্টেন্ট রিভিউ ও প্রকাশের জন্য প্রস্তুত — Done',
]

const webhookFeed = [
  { node: 'RSS Trigger', status: 'Active', meta: '42 sources' },
  { node: 'Gemini Summarizer', status: 'Running', meta: 'gemini-pro' },
  { node: 'Fact-Check Node', status: 'Verified', meta: '100%' },
  { node: 'Publish Webhook', status: 'Idle', meta: 'POST /publish' },
]

export function NewsroomDashboard() {
  const [logs, setLogs] = useState<Log[]>([])
  const [running, setRunning] = useState(false)
  const idRef = useRef(0)
  const logEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  const generate = () => {
    if (running) return
    setRunning(true)
    setLogs([])
    scriptSteps.forEach((step, i) => {
      setTimeout(() => {
        const id = idRef.current++
        setLogs((prev) => [
          ...prev.map((l) => ({ ...l, status: 'done' as const })),
          { id, text: step, status: i === scriptSteps.length - 1 ? 'done' : 'pending' },
        ])
        if (i === scriptSteps.length - 1) setRunning(false)
      }, (i + 1) * 900)
    })
  }

  const stats = [
    { icon: ShieldCheck, label: 'Automated Fact-Check', value: '100% Verified', accent: true },
    { icon: Webhook, label: 'Active n8n Workflows', value: '08' },
    { icon: Cpu, label: 'AI Model', value: 'Gemini AI' },
    { icon: Activity, label: 'Articles Processed Today', value: '1,284' },
  ]

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-lime/15 text-lime">
            <Bot className="size-6" />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-foreground">এআই নিউজরুম এজেন্ট</h1>
            <p className="font-en text-xs text-muted-foreground">
              Live Automation Dashboard · n8n + Gemini AI
            </p>
          </div>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1.5 text-xs font-semibold text-lime">
          <Radio className="size-3.5 animate-pulse" /> সিস্টেম অনলাইন
        </span>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`rounded-2xl border p-4 ${
              s.accent ? 'border-lime/50 bg-lime/10' : 'border-border bg-card'
            }`}
          >
            <s.icon className={`size-5 ${s.accent ? 'text-lime' : 'text-muted-foreground'}`} />
            <p className="mt-3 text-xs text-muted-foreground">{s.label}</p>
            <p className="font-en text-lg font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Webhook flow */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Webhook className="size-4 text-lime" />
            <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">
              Live n8n Webhook Flow
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {webhookFeed.map((w) => (
              <li
                key={w.node}
                className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-lime" />
                  <span className="font-en text-sm font-medium text-foreground">{w.node}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-en text-xs text-muted-foreground">{w.meta}</span>
                  <span className="rounded-full border border-lime/30 bg-lime/10 px-2 py-0.5 font-en text-[11px] font-semibold text-lime">
                    {w.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Script generator + logs */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-lime" />
              <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">
                Virtual Anchor Script
              </h2>
            </div>
            <button
              onClick={generate}
              disabled={running}
              className="flex items-center gap-1.5 rounded-lg bg-lime px-3 py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
            >
              {running ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" /> Processing...
                </>
              ) : (
                'Generate Virtual Anchor Script'
              )}
            </button>
          </div>

          <div className="scrollbar-thin h-56 overflow-auto rounded-lg border border-border bg-background p-4 font-en text-xs">
            {logs.length === 0 ? (
              <p className="text-muted-foreground/60">
                $ স্ক্রিপ্ট জেনারেট করতে উপরের বাটনে ক্লিক করুন...
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {logs.map((l) => (
                  <li key={l.id} className="flex items-start gap-2">
                    {l.status === 'pending' ? (
                      <Loader2 className="mt-0.5 size-3.5 shrink-0 animate-spin text-lime" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-lime" />
                    )}
                    <span className="text-muted-foreground">
                      <span className="text-lime">[v0]</span> {l.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div ref={logEndRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
