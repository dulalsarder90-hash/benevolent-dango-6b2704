import { SiteHeader } from '@/components/site-header'
import { BreakingTicker } from '@/components/breaking-ticker'
import { HeroGrid } from '@/components/hero-grid'
import { AdSlot } from '@/components/ad-slot'
import { CategorySection } from '@/components/category-section'
import { MultimediaBlock } from '@/components/multimedia-block'
import { SponsoredContent } from '@/components/sponsored-content'
import { ITServices } from '@/components/it-services'
import { SiteFooter } from '@/components/site-footer'
import { ExportUtility } from '@/components/export-utility'
import { categories } from '@/lib/data'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <BreakingTicker />

      {/* Top leaderboard ad */}
      <div className="border-b border-border bg-card/30 px-4 py-4">
        <AdSlot format="leaderboard" />
      </div>

      <main>
        <HeroGrid />

        <div className="mx-auto max-w-7xl px-4 pb-10">
          <div className="flex flex-col gap-10">
            {categories.map((cat, i) => (
              <div key={cat.key} className="flex flex-col gap-10">
                <CategorySection category={cat} />
                {/* Inject rectangle ad between major rows */}
                {(i === 1 || i === 3) && (
                  <div className="flex justify-center">
                    <AdSlot format="rectangle" />
                  </div>
                )}
                {i === 2 && <MultimediaBlock />}
              </div>
            ))}
          </div>
        </div>

        <div className="pb-10">
          <SponsoredContent />
        </div>

        <ITServices />
      </main>

      <SiteFooter />
      <ExportUtility />
    </div>
  )
}
