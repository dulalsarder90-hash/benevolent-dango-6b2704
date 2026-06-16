import Image from 'next/image'
import { sponsoredContent } from '@/lib/data'

export function SponsoredContent() {
  return (
    <section aria-label="স্পন্সরড কন্টেন্ট" className="mx-auto max-w-7xl px-4">
      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          স্পন্সরড কন্টেন্ট
        </h2>
        <span className="font-en text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Sponsored
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {sponsoredContent.map((s) => (
          <a
            key={s.id}
            href="#"
            className="group flex gap-3 rounded-xl border border-dashed border-border bg-card/40 p-3 transition-colors hover:border-lime/50"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
              <Image
                src={s.image || '/placeholder.svg'}
                alt={s.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <span className="font-en text-[10px] uppercase tracking-wide text-lime">
                {s.brand} · Partner
              </span>
              <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-lime">
                {s.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
