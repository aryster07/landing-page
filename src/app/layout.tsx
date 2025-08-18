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
  title: "Aryan Rana (7framesaryan) - Creative Professional Portfolio | UI/UX Designer & Developer",
  description: "Aryan Rana (7framesaryan) - Creative professional and UI/UX designer from Himachal Pradesh, India. Specializing in web development, user experience design, and digital solutions. Professional portfolio showcasing design and development work.",
  keywords: [
    "Aryan Rana",
    "7framesaryan",
    "7frames aryan",
    "Aryan Rana portfolio", 
    "7framesaryan portfolio",
    "UI UX designer India",
    "web developer Himachal Pradesh",
    "creative professional India",
    "portfolio website",
    "user experience designer",
    "digital designer",
    "web design services",
    "frontend developer",
    "Himachal Pradesh designer",
    "Indian web developer",
    "creative portfolio",
    "design portfolio",
    "professional portfolio",
    "Aryan Rana designer",
    "Aryan Rana developer",
    "7framesaryan designer",
    "7framesaryan developer",
    "7frames_aryan",
    "Aryan Rana UI UX",
    "7framesaryan UI UX"
  ],
  authors: [{ name: "Aryan Rana (7framesaryan)", url: "https://aryanrana.com" }],
  creator: "Aryan Rana (7framesaryan)",
  publisher: "Aryan Rana",
  category: "Portfolio",
  classification: "Business",
  applicationName: "Aryan Rana Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add your actual verification code
    yandex: "your-yandex-verification-code", // Add your actual verification code
  },
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
    title: "Aryan Rana (7framesaryan) - Creative Professional Portfolio | UI/UX Designer & Developer",
    description: "Aryan Rana (7framesaryan) - Creative professional and UI/UX designer from Himachal Pradesh, India. Specializing in web development, user experience design, and digital solutions.",
    siteName: "Aryan Rana (7framesaryan) Portfolio",
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
    title: "Aryan Rana (7framesaryan) - Creative Professional Portfolio",
    description: "Aryan Rana (7framesaryan) - Creative professional from Himachal Pradesh specializing in UI/UX design, web development, and digital solutions.",
    images: ['/images/profile/20250206_051456000_iOS.jpg'],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aryan Rana",
    "alternateName": ["7framesaryan", "7frames_aryan", "7frames aryan"],
    "jobTitle": "UI/UX Designer & Web Developer",
    "description": "Creative professional and UI/UX designer from Himachal Pradesh, India. Specializing in web development, user experience design, and digital solutions.",
    "url": "https://aryanrana.com",
    "image": "https://aryanrana.com/images/profile/20250206_051456000_iOS.jpg",
    "sameAs": [
      "https://aryandesign.vercel.app/",
      "https://aryanphotography.vercel.app/",
      "https://github.com/aryster07",
      "https://www.instagram.com/7frames_aryan/"
    ],
    "address": {
      "@type": "Place",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "UI/UX Design",
      "Web Development",
      "User Experience",
      "Frontend Development",
      "Digital Design",
      "Creative Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "UI/UX Designer & Web Developer",
      "occupationLocation": {
        "@type": "Place",
        "addressRegion": "Himachal Pradesh",
        "addressCountry": "India"
      }
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/profile/20250206_051456000_iOS.jpg" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_designer_clean.png" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_photographer_clean.png" as="image" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://aryanrana.com/" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aryan Rana Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
