import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aryan Rana - Creative Professional Portfolio",
  description: "Creative professional from Himachal Pradesh specializing in UI/UX design, web development, and digital solutions. Passionate about crafting exceptional user experiences and visual storytelling.",
  keywords: ["portfolio", "designer", "developer", "UI/UX", "web development", "Himachal Pradesh", "creative", "digital solutions", "user experience"],
  authors: [{ name: "Aryan Rana", url: "https://aryanrana.com" }],
  creator: "Aryan Rana",
  icons: {
    icon: [
      { url: '/images/profile/20250206_051456000_iOS.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/profile/20250206_051456000_iOS.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/profile/20250206_051456000_iOS.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/images/profile/20250206_051456000_iOS.jpg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryanrana.com",
    title: "Aryan Rana - Creative Professional Portfolio",
    description: "Creative professional from Himachal Pradesh specializing in UI/UX design, web development, and digital solutions.",
    siteName: "Aryan Rana Portfolio",
    images: [
      {
        url: '/images/profile/20250206_051456000_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'Aryan Profile Picture',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Rana - Creative Professional Portfolio",
    description: "Creative professional from Himachal Pradesh specializing in UI/UX design, web development, and digital solutions.",
    images: ['/images/profile/20250206_051456000_iOS.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/profile/20250206_051456000_iOS.jpg" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_designer_clean.png" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_photographer_clean.png" as="image" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
