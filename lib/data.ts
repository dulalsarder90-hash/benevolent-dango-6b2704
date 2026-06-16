export type Story = {
  id: string
  title: string
  excerpt?: string
  category: string
  categoryBn: string
  image: string
  time: string
  readMins?: number
}

export const breakingNews: string[] = [
  'জাতিসংঘ সাধারণ পরিষদে জলবায়ু তহবিল নিয়ে নতুন প্রস্তাব উত্থাপন',
  'বিশ্ব অর্থনীতিতে মন্দার শঙ্কা কমছে, আইএমএফের হালনাগাদ পূর্বাভাস',
  'বাংলাদেশের রপ্তানি আয়ে রেকর্ড প্রবৃদ্ধি, তৈরি পোশাক খাতে চাঙ্গাভাব',
  'কৃত্রিম বুদ্ধিমত্তা নিয়ন্ত্রণে নতুন আন্তর্জাতিক চুক্তির খসড়া চূড়ান্ত',
  'মধ্যপ্রাচ্যে যুদ্ধবিরতি কার্যকর, কূটনৈতিক তৎপরতা জোরদার',
]

export const leadStory: Story = {
  id: 'lead-1',
  title: 'জাতীয় সংসদে নতুন ডিজিটাল অর্থনীতি নীতিমালা অনুমোদন, প্রযুক্তি খাতে বিনিয়োগের নতুন দিগন্ত',
  excerpt:
    'দেশের প্রযুক্তিনির্ভর অর্থনীতিকে এগিয়ে নিতে সরকার নতুন ডিজিটাল নীতিমালা অনুমোদন করেছে। নীতিমালায় স্টার্টআপ, ক্লাউড অবকাঠামো ও সাইবার নিরাপত্তায় বিশেষ গুরুত্ব দেওয়া হয়েছে।',
  category: 'National',
  categoryBn: 'জাতীয়',
  image: '/news/lead-national.png',
  time: '২৫ মিনিট আগে',
  readMins: 5,
}

export const trendingGlobal: Story[] = [
  {
    id: 'tg-1',
    title: 'বিশ্ব অর্থনীতিতে সুদের হার স্থিতিশীল রাখার ইঙ্গিত কেন্দ্রীয় ব্যাংকগুলোর',
    category: 'World Economy',
    categoryBn: 'বিশ্ব অর্থনীতি',
    image: '/news/global-economy.png',
    time: '১ ঘণ্টা আগে',
  },
  {
    id: 'tg-2',
    title: 'নতুন প্রজন্মের এআই চিপ উন্মোচন, প্রযুক্তি বিশ্বে আলোড়ন',
    category: 'Global Tech',
    categoryBn: 'বিশ্ব প্রযুক্তি',
    image: '/news/global-tech.png',
    time: '২ ঘণ্টা আগে',
  },
  {
    id: 'tg-3',
    title: 'আন্তর্জাতিক সম্মেলনে জলবায়ু ও বাণিজ্য নিয়ে যৌথ ঘোষণা',
    category: 'Diplomacy',
    categoryBn: 'কূটনীতি',
    image: '/news/global-diplomacy.png',
    time: '৩ ঘণ্টা আগে',
  },
  {
    id: 'tg-4',
    title: 'সংঘাতপূর্ণ অঞ্চলে যুদ্ধবিরতি, মানবিক সহায়তা পৌঁছানোর উদ্যোগ',
    category: 'World Conflict',
    categoryBn: 'বিশ্ব সংঘাত',
    image: '/news/world-conflict.png',
    time: '৪ ঘণ্টা আগে',
  },
]

export type Category = {
  key: string
  bn: string
  en: string
  accent?: boolean
  stories: Story[]
}

export const categories: Category[] = [
  {
    key: 'national',
    bn: 'জাতীয়',
    en: 'National',
    stories: [
      {
        id: 'n1',
        title: 'রাজধানীতে নতুন মেট্রো রুট চালু, যাত্রী ভোগান্তি কমার প্রত্যাশা',
        category: 'National',
        categoryBn: 'জাতীয়',
        image: '/news/lead-national.png',
        time: '৩০ মিনিট আগে',
      },
      {
        id: 'n2',
        title: 'শিক্ষা খাতে ডিজিটাল রূপান্তরে নতুন কর্মসূচি ঘোষণা',
        category: 'National',
        categoryBn: 'জাতীয়',
        image: '/news/economy.png',
        time: '১ ঘণ্টা আগে',
      },
      {
        id: 'n3',
        title: 'জাতীয় মহাসড়কে স্মার্ট ট্রাফিক ব্যবস্থাপনা চালুর পরিকল্পনা',
        category: 'National',
        categoryBn: 'জাতীয়',
        image: '/news/politics.png',
        time: '২ ঘণ্টা আগে',
      },
    ],
  },
  {
    key: 'politics',
    bn: 'রাজনীতি',
    en: 'Politics',
    stories: [
      {
        id: 'p1',
        title: 'সংসদ অধিবেশনে বাজেট নিয়ে বিস্তারিত আলোচনা',
        category: 'Politics',
        categoryBn: 'রাজনীতি',
        image: '/news/politics.png',
        time: '৪৫ মিনিট আগে',
      },
      {
        id: 'p2',
        title: 'কূটনৈতিক সফরে দ্বিপাক্ষিক সম্পর্ক জোরদারের অঙ্গীকার',
        category: 'Politics',
        categoryBn: 'রাজনীতি',
        image: '/news/global-diplomacy.png',
        time: '২ ঘণ্টা আগে',
      },
      {
        id: 'p3',
        title: 'নির্বাচন কমিশনের নতুন রোডম্যাপ প্রকাশ',
        category: 'Politics',
        categoryBn: 'রাজনীতি',
        image: '/news/lead-national.png',
        time: '৩ ঘণ্টা আগে',
      },
    ],
  },
  {
    key: 'economy',
    bn: 'অর্থনীতি',
    en: 'Economy',
    stories: [
      {
        id: 'e1',
        title: 'রপ্তানি আয়ে রেকর্ড, রিজার্ভে স্বস্তির আভাস',
        category: 'Economy',
        categoryBn: 'অর্থনীতি',
        image: '/news/economy.png',
        time: '১ ঘণ্টা আগে',
      },
      {
        id: 'e2',
        title: 'আন্তর্জাতিক বাজারে জ্বালানি তেলের দামে ওঠানামা',
        category: 'Economy',
        categoryBn: 'অর্থনীতি',
        image: '/news/global-economy.png',
        time: '২ ঘণ্টা আগে',
      },
      {
        id: 'e3',
        title: 'ডিজিটাল ব্যাংকিংয়ে নতুন লাইসেন্স অনুমোদন',
        category: 'Economy',
        categoryBn: 'অর্থনীতি',
        image: '/news/global-tech.png',
        time: '৪ ঘণ্টা আগে',
      },
    ],
  },
  {
    key: 'sports',
    bn: 'খেলাধুলা',
    en: 'Sports',
    stories: [
      {
        id: 's1',
        title: 'আন্তর্জাতিক সিরিজে দুর্দান্ত জয়, শীর্ষে উঠে এলো দল',
        category: 'Sports',
        categoryBn: 'খেলাধুলা',
        image: '/news/sports.png',
        time: '২০ মিনিট আগে',
      },
      {
        id: 's2',
        title: 'বিশ্বকাপ প্রস্তুতি: নতুন কোচিং প্যানেল ঘোষণা',
        category: 'Sports',
        categoryBn: 'খেলাধুলা',
        image: '/news/sports.png',
        time: '১ ঘণ্টা আগে',
      },
      {
        id: 's3',
        title: 'ফুটবলে নতুন প্রতিভার উত্থান, আন্তর্জাতিক ক্লাবের আগ্রহ',
        category: 'Sports',
        categoryBn: 'খেলাধুলা',
        image: '/news/sports.png',
        time: '৩ ঘণ্টা আগে',
      },
    ],
  },
  {
    key: 'conflict',
    bn: 'বিশ্ব সংঘাত ও যুদ্ধ',
    en: 'World Conflict & War',
    accent: true,
    stories: [
      {
        id: 'c1',
        title: 'যুদ্ধবিরতি চুক্তির পর সীমান্তে শান্তি ফেরানোর প্রচেষ্টা',
        category: 'World Conflict',
        categoryBn: 'বিশ্ব সংঘাত',
        image: '/news/world-conflict.png',
        time: '৪০ মিনিট আগে',
      },
      {
        id: 'c2',
        title: 'জাতিসংঘের শান্তিরক্ষা মিশন সম্প্রসারণের প্রস্তাব',
        category: 'World Conflict',
        categoryBn: 'বিশ্ব সংঘাত',
        image: '/news/global-diplomacy.png',
        time: '২ ঘণ্টা আগে',
      },
      {
        id: 'c3',
        title: 'মানবিক সংকট মোকাবিলায় আন্তর্জাতিক ত্রাণ তৎপরতা',
        category: 'World Conflict',
        categoryBn: 'বিশ্ব সংঘাত',
        image: '/news/world-conflict.png',
        time: '৫ ঘণ্টা আগে',
      },
    ],
  },
  {
    key: 'opinion',
    bn: 'মতামত ও সম্পাদকীয়',
    en: 'Opinion & Editorial',
    stories: [
      {
        id: 'o1',
        title: 'সম্পাদকীয়: ডিজিটাল সাক্ষরতাই আগামীর অর্থনীতির ভিত্তি',
        category: 'Opinion',
        categoryBn: 'মতামত',
        image: '/news/opinion.png',
        time: '১ ঘণ্টা আগে',
      },
      {
        id: 'o2',
        title: 'বিশ্লেষণ: বৈশ্বিক সরবরাহ শৃঙ্খলে বাংলাদেশের সম্ভাবনা',
        category: 'Opinion',
        categoryBn: 'মতামত',
        image: '/news/economy.png',
        time: '৩ ঘণ্টা আগে',
      },
      {
        id: 'o3',
        title: 'কলাম: কৃত্রিম বুদ্ধিমত্তা ও সাংবাদিকতার ভবিষ্যৎ',
        category: 'Opinion',
        categoryBn: 'মতামত',
        image: '/news/global-tech.png',
        time: '৫ ঘণ্টা আগে',
      },
    ],
  },
]

export type VideoItem = {
  id: string
  title: string
  duration: string
  image: string
}

export const videoHighlights: VideoItem[] = [
  {
    id: 'v1',
    title: 'এআই ভার্চুয়াল অ্যাঙ্কর: আজকের শীর্ষ জাতীয় সংবাদ',
    duration: '০৩:২৪',
    image: '/news/video-1.png',
  },
  {
    id: 'v2',
    title: 'বিশ্ব সংবাদ বুলেটিন: আন্তর্জাতিক পরিস্থিতির হালনাগাদ',
    duration: '০৫:১২',
    image: '/news/video-2.png',
  },
  {
    id: 'v3',
    title: 'বিশেষ প্রতিবেদন: বৈশ্বিক অর্থনীতির গতিপ্রকৃতি',
    duration: '০৭:৪৮',
    image: '/news/video-3.png',
  },
]

export type SponsoredItem = {
  id: string
  brand: string
  title: string
  image: string
}

export const sponsoredContent: SponsoredItem[] = [
  {
    id: 'sp1',
    brand: 'ক্লাউডটেক বিডি',
    title: 'এন্টারপ্রাইজ ক্লাউড হোস্টিংয়ে ৪০% পর্যন্ত সাশ্রয়',
    image: '/news/global-tech.png',
  },
  {
    id: 'sp2',
    brand: 'গ্রিনফিন',
    title: 'ডিজিটাল ব্যাংকিংয়ে নিরাপদ লেনদেনের নতুন সমাধান',
    image: '/news/economy.png',
  },
  {
    id: 'sp3',
    brand: 'মিডিয়াপ্রো',
    title: 'এআই ভিডিও প্রোডাকশন স্টুডিও — ব্র্যান্ডের গল্প বলুন',
    image: '/news/video-1.png',
  },
]
