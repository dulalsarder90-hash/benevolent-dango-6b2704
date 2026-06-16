import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ExportUtility } from '@/components/export-utility'
import { EpaperViewer } from './epaper-viewer'

export const metadata: Metadata = {
  title: 'ই-পেপার | বাংলার ভয়েস ২৪ নিউজ',
  description: 'আজকের ছাপা সংস্করণ ডিজিটাল ই-পেপার আকারে পড়ুন।',
}

export default function EpaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <EpaperViewer />
      </main>
      <SiteFooter />
      <ExportUtility />
    </div>
  )
}
