import Image from 'next/image'
import { Clock, TrendingUp, ArrowUpRight } from 'lucide-react'
import { leadStory, trendingGlobal } from '@/lib/data'

export function HeroGrid() {
  return (
    <section aria-label="শীর্ষ সংবাদ" className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-5 lg:grid-cols-3">
        {/* Lead story */}
        <article className="group relative overflow-hidden rounded-2xl border border-border lg:col-span-2">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
            <Image
              src={leadStory.image || '/placeholder.svg'}
              alt={leadStory.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-md bg-lime px-2.5 py-1 text-xs font-bold text-primary-foreground">
                {leadStory.categoryBn}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3.5" /> {leadStory.time}
              </span>
            </div>
            <h1 className="max-w-3xl text-balance text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-[2rem]">
              {leadStory.title}
            </h1>
            <p className="mt-3 hidden max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:block">
              {leadStory.excerpt}
            </p>
            <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-foreground">
              বিস্তারিত পড়ুন <ArrowUpRight className="size-4" />
            </button>
          </div>
        </article>

        {/* Trending global stack */}
        <div className="flex flex-col rounded-2xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
            <TrendingUp className="size-4 text-lime" />
            <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">
              ট্রেন্ডিং বিশ্ব সংবাদ
            </h2>
          </div>
          <ul className="flex flex-col divide-y divide-border">
            {trendingGlobal.map((s, i) => (
              <li key={s.id}>
                <a className="group flex gap-3 py-3" href="#">
                  <span className="font-en text-lg font-bold text-lime/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={s.title}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-lime">{s.categoryBn}</span>
                    <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-lime">
                      {s.title}
                    </h3>
                    <span className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="size-3" /> {s.time}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
