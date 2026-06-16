import Image from 'next/image'
import { Play, Sparkles } from 'lucide-react'
import { videoHighlights } from '@/lib/data'

export function MultimediaBlock() {
  return (
    <section
      aria-label="ভিডিও গ্যালারি"
      className="rounded-2xl border border-border bg-card p-5 sm:p-7"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-lime/15 text-lime">
            <Sparkles className="size-5" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-foreground">এআই ভার্চুয়াল অ্যাঙ্কর হাইলাইটস</h2>
            <p className="font-en text-xs text-muted-foreground">AI Virtual Anchor News Highlights</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
          <span className="size-1.5 animate-pulse rounded-full bg-lime" /> অটো-জেনারেটেড
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {videoHighlights.map((v) => (
          <article key={v.id} className="group overflow-hidden rounded-xl border border-border">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={v.image || '/placeholder.svg'}
                alt={v.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <button
                aria-label={`ভিডিও চালান: ${v.title}`}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-lime/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 translate-x-0.5 fill-current" />
                </span>
              </button>
              <span className="absolute bottom-2 right-2 rounded bg-background/80 px-1.5 py-0.5 font-en text-[11px] font-medium text-foreground">
                {v.duration}
              </span>
            </div>
            <div className="p-3">
              <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-lime">
                {v.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
