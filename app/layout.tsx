import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Hind_Siliguri, Inter } from 'next/font/google'
import './globals.css'

const hindSiliguri = Hind_Siliguri({
  variable: '--font-bangla',
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'বাংলার ভয়েস ২৪ নিউজ | জাতীয় ও আন্তর্জাতিক সংবাদ',
  description:
    'Banglar Voice 24 News — জাতীয় ও আন্তর্জাতিক বিশ্বস্ত সংবাদ, রাজনীতি, অর্থনীতি, খেলাধুলা, বিশ্ব সংঘাত ও মতামত। সাথে আধুনিক আইটি সেবা ও ই-পেপার।',
  generator: 'v0.app',
  keywords: [
    'Banglar Voice 24',
    'বাংলা সংবাদ',
    'জাতীয় সংবাদ',
    'আন্তর্জাতিক সংবাদ',
    'IT Services',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020617',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="bn"
      className={`dark ${hindSiliguri.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
