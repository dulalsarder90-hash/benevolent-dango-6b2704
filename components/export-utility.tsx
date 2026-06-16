'use client'

import { useState } from 'react'
import { Download, Package, X, Check } from 'lucide-react'

const projectManifest = {
  name: 'Banglar Voice 24 News',
  domain: 'banglarvoice24news.com',
  framework: 'Next.js (App Router) + Tailwind CSS v4',
  theme: {
    background: '#020617',
    accent: '#deff9a',
    text: '#f8fafc',
    muted: '#cbd5e1',
    fonts: ['Hind Siliguri (Bengali)', 'Inter (English/Numbers)'],
  },
  modules: [
    'Sticky Header + Live Clock + Social Links',
    'Breaking News Ticker',
    'National + Global Hero Grid',
    'Category Sections (National, Politics, Economy, Sports, World Conflict, Opinion)',
    'AI Virtual Anchor Multimedia Gallery',
    'Ad Slots (728x90, 300x250) + Sponsored Content',
    'Digital E-Paper Viewer',
    'AI Newsroom Agent Dashboard',
    'IT Services Hub + Interactive Order Modal',
    'Legal Compliance Footer',
  ],
  exportedAt: new Date().toISOString(),
  note: 'Static, transportable build. No backend database role-gating or subscription barriers.',
}

export function ExportUtility() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  const download = () => {
    const blob = new Blob([JSON.stringify(projectManifest, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'banglar-voice-24-news.manifest.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setDone(true)
    setTimeout(() => setDone(false), 2500)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-lime px-4 py-3 text-sm font-bold text-primary-foreground shadow-[0_8px_30px_-8px_var(--lime)] transition-transform hover:scale-105"
        aria-label="প্রজেক্ট এক্সপোর্ট"
      >
        <Package className="size-5" />
        <span className="hidden sm:inline">এক্সপোর্ট</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="প্রজেক্ট এক্সপোর্ট"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="বন্ধ করুন"
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-lime hover:text-lime"
            >
              <X className="size-4" />
            </button>
            <span className="flex size-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
              <Download className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">প্রজেক্ট এক্সপোর্ট ইউটিলিটি</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              এই বিল্ডটি সম্পূর্ণ ট্রান্সপোর্টেবল — কোনো ডাটাবেস রোল-গেটিং বা সাবস্ক্রিপশন বাধা নেই।
              নিচের বাটনে ক্লিক করে প্রজেক্ট ম্যানিফেস্ট ডাউনলোড করুন, অথবা v0-এর{' '}
              <span className="font-semibold text-foreground">“Download ZIP”</span> অপশন ব্যবহার করে
              সম্পূর্ণ সোর্স কোড নিন।
            </p>
            <ul className="mt-4 flex flex-col gap-2 rounded-lg border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
              {projectManifest.modules.slice(0, 5).map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <Check className="size-3.5 text-lime" /> {m}
                </li>
              ))}
            </ul>
            <button
              onClick={download}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-lime px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {done ? (
                <>
                  <Check className="size-4" /> ডাউনলোড সম্পন্ন
                </>
              ) : (
                <>
                  <Download className="size-4" /> ম্যানিফেস্ট ডাউনলোড করুন
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
