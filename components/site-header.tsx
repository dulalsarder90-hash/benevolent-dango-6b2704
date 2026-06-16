'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bell, Radio, Menu, X, Search } from 'lucide-react'
import {
  Facebook,
  Youtube,
  Telegram,
  Instagram,
  XTwitter,
  Linkedin,
} from '@/components/brand-icons'

const navItems = [
  { bn: 'প্রচ্ছদ', href: '/' },
  { bn: 'জাতীয়', href: '/#national' },
  { bn: 'আন্তর্জাতিক', href: '/#conflict' },
  { bn: 'রাজনীতি', href: '/#politics' },
  { bn: 'অর্থনীতি', href: '/#economy' },
  { bn: 'খেলাধুলা', href: '/#sports' },
  { bn: 'মতামত', href: '/#opinion' },
  { bn: 'ই-পেপার', href: '/e-paper' },
  { bn: 'নিউজরুম এআই', href: '/newsroom-agent' },
  { bn: 'সেবাসমূহ', href: '/#services' },
]

const socials = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
  { label: 'Telegram', icon: Telegram, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'X', icon: XTwitter, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
]

function useClock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  return now
}

const bnDate = (d: Date) =>
  new Intl.DateTimeFormat('bn-BD', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)

const bnTime = (d: Date) =>
  new Intl.DateTimeFormat('bn-BD', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(d)

export function SiteHeader() {
  const now = useClock()
  const [open, setOpen] = useState(false)
  const [notify, setNotify] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      {/* Top utility bar */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Radio className="size-3.5 text-lime" aria-hidden="true" />
            <span className="tabular-nums" suppressHydrationWarning>
              {now ? `${bnDate(now)} | ${bnTime(now)}` : '—'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-lime hover:text-lime"
              >
                <s.icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Brand row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-lime text-primary-foreground shadow-[0_0_24px_-6px_var(--lime)]">
            <Radio className="size-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-foreground sm:text-xl">
              বাংলার ভয়েস ২৪
            </span>
            <span className="block font-en text-[11px] font-medium uppercase tracking-[0.2em] text-lime">
              Banglar Voice 24 News
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            aria-label="অনুসন্ধান"
            className="hidden size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-lime hover:text-lime sm:flex"
          >
            <Search className="size-4" />
          </button>
          <button
            onClick={() => setNotify((v) => !v)}
            aria-label="পুশ নোটিফিকেশন"
            aria-pressed={notify}
            className="relative flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-lime hover:text-lime"
          >
            <Bell className="size-4" />
            <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
              <span
                className={`absolute inline-flex h-full w-full rounded-full bg-lime ${notify ? 'animate-ping' : ''}`}
              />
              <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
            </span>
          </button>
          <Link
            href="/#services"
            className="hidden rounded-md bg-lime px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
          >
            সেবা নিন
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="মেনু"
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden border-t border-border/60 lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-4">
          {navItems.map((item) => (
            <Link
              key={item.bn}
              href={item.href}
              className="relative px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-lime"
            >
              {item.bn}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.bn}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-lime"
              >
                {item.bn}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
