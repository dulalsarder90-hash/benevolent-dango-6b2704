import { cn } from '@/lib/utils'

type AdSlotProps = {
  format: 'leaderboard' | 'rectangle'
  className?: string
}

const labels = {
  leaderboard: '728 × 90',
  rectangle: '300 × 250',
}

export function AdSlot({ format, className }: AdSlotProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 text-center',
        format === 'leaderboard'
          ? 'mx-auto h-[90px] w-full max-w-[728px]'
          : 'h-[250px] w-full max-w-[300px]',
        className,
      )}
      role="complementary"
      aria-label="বিজ্ঞাপন"
    >
      <span className="font-en text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
        Advertisement
      </span>
      <span className="mt-1 font-en text-xs font-medium text-muted-foreground">
        {labels[format]} — বিজ্ঞাপন স্থান
      </span>
      <span className="mt-0.5 text-[11px] text-muted-foreground/60">
        আপনার ব্র্যান্ড এখানে প্রদর্শন করুন
      </span>
    </div>
  )
}
