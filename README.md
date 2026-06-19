News Sources
   ↓
Ingestion Layer (RSS + Scraper)
   ↓
AI Rewrite Engine
   ↓
Viral Score Engine
   ↓
Approval Layer (optional)
   ↓
Multi-Platform Publisher
   ↓
Analytics Engine
   ↓
Feedback Loop
export function viralScore(news: any) {
  let score = 40

  if (news.title.toLowerCase().includes("breaking")) score += 25
  if (news.title.length > 60) score += 10
  if (news.sourceTrust > 70) score += 15
  if (news.socialTrend) score += 20

  return Math.min(score, 100)
}export function approvalGate(score: number) {
  if (score > 85) return "AUTO_PUBLISH"
  if (score > 60) return "REVIEW_REQUIRED"
  return "REJECT"
}import { sendTelegram } from "./telegram"

export async function publishAll(article: any, decision: string) {

  if (decision === "REJECT") return

  // WEB
  await fetch("/api/article", {
    method: "POST",
    body: JSON.stringify(article)
  })

  // TELEGRAM
  await sendTelegram("📰 " + article.title)

  // FACEBOOK (webhook ready)
  if (decision !== "REVIEW_REQUIRED") {
    await fetch(process.env.FB_WEBHOOK!, {
      method: "POST",
      body: JSON.stringify(article)
    })
  }
}export function generateScript(article: any) {
  return `
Breaking News Update:

${article.title}

Details:
${article.content}

Stay updated with Banglar Voice.
`
}export function shouldMakeVideo(score: number) {
  return score > 75
}export async function ingestNews() {
  const feeds = [
    "https://rss.cnn.com/rss/edition.rss",
    "https://feeds.bbci.co.uk/news/rss.xml"
  ]

  const data = await Promise.all(
    feeds.map(f => fetch(f).then(r => r.text()))
  )

  return data
}import { viralScore } from "./viral"
import { approvalGate } from "./approval"
import { publishAll } from "./publisher"

export async function runV3(newsList: any[]) {

  for (const news of newsList) {

    const score = viralScore(news)
    const decision = approvalGate(score)

    await publishAll(news, decision)
  }
}export const analytics = {
  traffic: 0,
  viralPosts: 0,

  updateTraffic(n: number) {
    this.traffic += n
  },

  addViral() {
    this.viralPosts++
  }
}Docker Containers
   ↓
Web App (Next.js)
   ↓
Worker (AI Pipeline)
   ↓
Database (PostgreSQL)
   ↓
Telegram Bot
   ↓
Facebook API
   ↓
YouTube EngineEvery 5–10 minutes:

News Ingestion
   ↓
AI Processing
   ↓
Viral Score
   ↓
Decision Engine
   ↓
Publish (Web + Social + Video)
   ↓
Analytics Update
   ↓
System Learning Loop
