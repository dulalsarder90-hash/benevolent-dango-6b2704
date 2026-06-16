import { breakingNews } from '@/lib/data'

export function BreakingTicker() {
  const items = [...breakingNews, ...breakingNews]
  return (
    <div className="flex items-stretch border-b border-border bg-card">
      <div className="flex shrink-0 items-center gap-2 bg-lime px-4 py-2.5 text-sm font-bold text-primary-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/70" />
          <span className="relative inline-flex size-2 rounded-full bg-primary-foreground" />
        </span>
        ব্রেকিং
      </div>
      <div className="marquee-fade relative flex-1 overflow-hidden">
        <div className="ticker-track flex w-max items-center whitespace-nowrap py-2.5">
          {items.map((item, i) => (
            <span key={i} className="flex items-center text-sm text-muted-foreground">
              <span className="px-6">{item}</span>
              <span className="text-lime">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
