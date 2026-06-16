'use client'

import { useState } from 'react'
import {
  Server,
  Code2,
  Boxes,
  Megaphone,
  BadgeCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { OrderModal } from './order-modal'

type Service = {
  icon: LucideIcon
  bn: string
  en: string
  desc: string
}

const services: Service[] = [
  {
    icon: Server,
    bn: 'ডোমেইন ও হোস্টিং সার্ভিস',
    en: 'Premium Cloud Hosting Solutions',
    desc: 'উচ্চগতির, নিরাপদ ও স্কেলেবল ক্লাউড হোস্টিং এবং ডোমেইন রেজিস্ট্রেশন সেবা।',
  },
  {
    icon: Code2,
    bn: 'ওয়েবসাইট ডিজাইন ও তৈরি',
    en: 'Modern React & Next.js Development',
    desc: 'আধুনিক, দ্রুত ও এসইও-বান্ধব ওয়েবসাইট ও ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট।',
  },
  {
    icon: Boxes,
    bn: 'কাস্টম সফটওয়্যার তৈরি',
    en: 'Tailored Enterprise Software',
    desc: 'আপনার ব্যবসার প্রয়োজন অনুযায়ী এন্টারপ্রাইজ-গ্রেড কাস্টম সফটওয়্যার সমাধান।',
  },
  {
    icon: Megaphone,
    bn: 'প্রফেশনাল বিজ্ঞাপন তৈরি',
    en: 'Dynamic AI Video & Graphic Production',
    desc: 'এআই-চালিত ভিডিও, মোশন গ্রাফিক্স ও ব্র্যান্ড ক্যাম্পেইন প্রোডাকশন।',
  },
  {
    icon: BadgeCheck,
    bn: 'সোশ্যাল মিডিয়া ভেরিফিকেশন ও ব্লু-ব্যাজ',
    en: 'Meta Blue Badge Assistance',
    desc: 'মেটা ও অন্যান্য প্ল্যাটফর্মে ভেরিফিকেশন এবং ব্লু-ব্যাজ অর্জনে সহায়তা।',
  },
]

const serviceNames = services.map((s) => s.bn)

export function ITServices() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | undefined>(undefined)

  const openModal = (service?: string) => {
    setActive(service)
    setOpen(true)
  }

  return (
    <section id="services" className="scroll-mt-28 border-y border-border bg-card/40 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <span className="font-en text-xs font-semibold uppercase tracking-[0.25em] text-lime">
            Banglar Voice IT · B2B Hub
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">আমাদের সেবাসমূহ</h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            সংবাদের পাশাপাশি আমরা প্রদান করি পূর্ণাঙ্গ ডিজিটাল ও আইটি সমাধান। আপনার ব্যবসাকে এগিয়ে
            নিতে আমাদের এন্টারপ্রাইজ-গ্রেড সেবা গ্রহণ করুন।
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.bn}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-lime/50 hover:shadow-[0_0_40px_-20px_var(--lime)]"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-lime/15 text-lime transition-colors group-hover:bg-lime group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{s.bn}</h3>
              <p className="font-en text-xs font-medium uppercase tracking-wide text-lime">{s.en}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => openModal(s.bn)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-lime px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  অর্ডার করুন <ArrowRight className="size-4" />
                </button>
                <button
                  onClick={() => openModal(s.bn)}
                  className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-lime hover:text-lime"
                >
                  যোগাযোগ
                </button>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <article className="flex flex-col justify-center rounded-2xl border border-lime/40 bg-lime/10 p-6">
            <h3 className="text-lg font-bold text-foreground">কাস্টম প্রকল্প আছে?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              আপনার বিশেষ চাহিদা নিয়ে আলোচনা করতে আমাদের সাথে সরাসরি যোগাযোগ করুন।
            </p>
            <button
              onClick={() => openModal()}
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-lime px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              যোগাযোগ করুন <ArrowRight className="size-4" />
            </button>
          </article>
        </div>
      </div>

      <OrderModal
        open={open}
        onClose={() => setOpen(false)}
        services={serviceNames}
        defaultService={active}
      />
    </section>
  )
}
