import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ExportUtility } from '@/components/export-utility'
import { NewsroomDashboard } from './newsroom-dashboard'

export const metadata: Metadata = {
  title: 'এআই নিউজরুম এজেন্ট | বাংলার ভয়েস ২৪ নিউজ',
  description: 'লাইভ n8n ওয়ার্কফ্লো ও Gemini AI চালিত স্বয়ংক্রিয় নিউজরুম ড্যাশবোর্ড।',
}

export default function NewsroomAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <NewsroomDashboard />
      </main>
      <SiteFooter />
      <ExportUtility />
    </div>
  )
}
