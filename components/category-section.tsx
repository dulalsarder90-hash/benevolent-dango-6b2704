import Image from 'next/image'
import { Clock, ChevronRight } from 'lucide-react'
import type { Category } from '@/lib/data'

export function CategorySection({ category }: { category: Category }) {
  const [feature, ...rest] = category.stories
  return (
    <section id={category.key} className="scroll-mt-28">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-lime" aria-hidden="true" />
          <h2 className="text-xl font-bold text-foreground">
            {category.bn}
            <span className="ml-2 font-en text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {category.en}
            </span>
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-sm font-medium text-lime transition-colors hover:text-foreground"
        >
          সব দেখুন <ChevronRight className="size-4" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Feature */}
        <article className="group overflow-hidden rounded-xl border border-border bg-card md:row-span-1">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={feature.image || '/placeholder.svg'}
              alt={feature.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {category.accent && (
              <span className="absolute left-3 top-3 rounded bg-destructive px-2 py-0.5 text-[11px] font-bold text-destructive-foreground">
                LIVE আপডেট
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="line-clamp-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-lime">
              {feature.title}
            </h3>
            <span className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" /> {feature.time}
            </span>
          </div>
        </article>

        {/* Rest list */}
        <div className="md:col-span-2">
          <ul className="grid h-full gap-3 sm:grid-cols-2">
            {rest.map((s) => (
              <li
                key={s.id}
                className="group flex gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-lime/40"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={s.image || '/placeholder.svg'}
                    alt={s.title}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="line-clamp-3 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-lime">
                    {s.title}
                  </h3>
                  <span className="mt-1.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock className="size-3" /> {s.time}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
