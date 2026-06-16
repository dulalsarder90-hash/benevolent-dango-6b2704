'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Newspaper, Download } from 'lucide-react'

const pages = [
  { label: 'প্রথম পাতা', img: '/news/epaper-front.png' },
  { label: 'জাতীয়', img: '/news/epaper-front.png' },
  { label: 'আন্তর্জাতিক', img: '/news/epaper-front.png' },
  { label: 'খেলাধুলা', img: '/news/epaper-front.png' },
]

export function EpaperViewer() {
  const [page, setPage] = useState(0)
  const [zoom, setZoom] = useState(1)

  const today = new Intl.DateTimeFormat('bn-BD', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 text-center">
        <span className="flex items-center justify-center gap-2 font-en text-xs font-semibold uppercase tracking-[0.25em] text-lime">
          <Newspaper className="size-4" /> E-Paper
        </span>
        <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">ই-পেপার</h1>
        <p className="mt-2 text-sm text-muted-foreground" suppressHydrationWarning>
          {today}
        </p>
      </div>

      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="আগের পাতা"
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-lime hover:text-lime disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="min-w-28 text-center text-sm font-medium text-foreground">
            {pages[page].label}{' '}
            <span className="font-en text-muted-foreground">
              ({page + 1}/{pages.length})
            </span>
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
            disabled={page === pages.length - 1}
            aria-label="পরের পাতা"
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-lime hover:text-lime disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
            aria-label="জুম আউট"
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-lime hover:text-lime"
          >
            <ZoomOut className="size-4" />
          </button>
          <span className="w-12 text-center font-en text-sm text-muted-foreground">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={() => setZoom((z) => Math.min(2.5, +(z + 0.25).toFixed(2)))}
            aria-label="জুম ইন"
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-lime hover:text-lime"
          >
            <ZoomIn className="size-4" />
          </button>
          <button className="ml-1 flex items-center gap-1.5 rounded-md bg-lime px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            <Download className="size-4" /> আজকের ই-পেপার পড়ুন
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div className="scrollbar-thin overflow-auto rounded-xl border border-border bg-secondary/30 p-4">
        <div className="flex justify-center">
          <div
            className="relative origin-top overflow-hidden rounded-lg border border-border bg-card shadow-2xl transition-transform duration-300"
            style={{ transform: `scale(${zoom})`, width: 'min(100%, 640px)' }}
          >
            <Image
              src={pages[page].img || '/placeholder.svg'}
              alt={`ই-পেপার ${pages[page].label}`}
              width={640}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {pages.map((p, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`overflow-hidden rounded-lg border transition-colors ${
              page === i ? 'border-lime' : 'border-border hover:border-lime/50'
            }`}
            aria-label={`${p.label} পাতায় যান`}
          >
            <Image
              src={p.img || '/placeholder.svg'}
              alt={p.label}
              width={160}
              height={220}
              className="h-auto w-full"
            />
            <span className="block py-1.5 text-center text-[11px] text-muted-foreground">
              {p.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
