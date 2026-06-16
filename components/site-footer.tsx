import Link from 'next/link'
import { Radio, ShieldCheck } from 'lucide-react'
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Telegram,
} from '@/components/brand-icons'

const policyLinks = [
  { bn: 'গোপনীয়তা নীতি', en: 'Privacy Policy', href: '#' },
  { bn: 'ব্যবহারের শর্তাবলী', en: 'Terms of Service', href: '#' },
  { bn: 'দাবিত্যাগ', en: 'Disclaimer', href: '#' },
]

const sections = [
  { title: 'সংবাদ বিভাগ', items: ['জাতীয়', 'আন্তর্জাতিক', 'রাজনীতি', 'অর্থনীতি', 'খেলাধুলা'] },
  { title: 'সেবাসমূহ', items: ['হোস্টিং', 'ওয়েব ডিজাইন', 'সফটওয়্যার', 'বিজ্ঞাপন', 'ব্লু-ব্যাজ'] },
  { title: 'প্রতিষ্ঠান', items: ['আমাদের সম্পর্কে', 'যোগাযোগ', 'বিজ্ঞাপন দিন', 'ক্যারিয়ার', 'ই-পেপার'] },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-lime text-primary-foreground">
                <Radio className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold text-foreground">বাংলার ভয়েস ২৪</span>
                <span className="block font-en text-[10px] uppercase tracking-[0.2em] text-lime">
                  Banglar Voice 24 News
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              জাতীয় ও আন্তর্জাতিক বিশ্বস্ত সংবাদের নির্ভরযোগ্য উৎস। সত্য, নিরপেক্ষ ও দ্রুত
              সংবাদ পরিবেশনই আমাদের অঙ্গীকার।
            </p>
            <div className="mt-4 flex gap-2">
              {[Facebook, Youtube, Telegram, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="সোশ্যাল মিডিয়া"
                  className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-lime hover:text-lime"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="text-sm font-bold text-foreground">{sec.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {sec.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-lime"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance notice */}
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-lime" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            সম্পাদক ও প্রকাশনা প্যানেল দ্বারা পরিচালিত। মোবাইল কোর্ট আইন ২০০৯ এবং তথ্য অধিকার
            আইন (RTI) এর সকল বিধিমালা মেনে প্রকাশিত।
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-en text-xs text-muted-foreground">
            © {new Date().getFullYear()} Banglar Voice 24 News · banglarvoice24news.com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {policyLinks.map((p) => (
              <Link
                key={p.en}
                href={p.href}
                className="text-xs text-muted-foreground transition-colors hover:text-lime"
              >
                {p.bn}{' '}
                <span className="font-en text-muted-foreground/60">({p.en})</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
