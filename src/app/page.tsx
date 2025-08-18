import HeroSection from '@/components/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aryan Rana (7framesaryan) - Creative Professional Portfolio",
  description: "Aryan Rana (7framesaryan) - Professional UI/UX designer and web developer from Himachal Pradesh. View my portfolio of creative design and development projects.",
  openGraph: {
    title: "Aryan Rana (7framesaryan) - Creative Professional Portfolio",
    description: "Aryan Rana (7framesaryan) - Professional UI/UX designer and web developer from Himachal Pradesh. Creative portfolio showcasing design and development work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Rana (7framesaryan) - Creative Professional Portfolio",
    description: "Aryan Rana (7framesaryan) - Professional UI/UX designer and web developer from Himachal Pradesh. Creative portfolio showcasing design and development work.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      
    </main>
  )
}
