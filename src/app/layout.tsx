import { Inter } from 'next/font/google'
import './globals.css'
import Particles from '@/components/Particles'
import CookieConsent from '@/components/CookieConsent'
import Script from 'next/script'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'OUTOFREACH3D™ – Create, Customize, and Sell for IMVU, Second Life & More',
  description: 'Create virtual products for IMVU, Second Life, Sims 4, Roblox, Inzoi, GTA 6 and more. Design once, sell everywhere.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
  openGraph: {
    title: 'OUTOFREACH3D™ - Create Virtual Products',
    description: 'OOR3D™ gives creators the power to design, customize, and launch digital wearables for IMVU, Second Life, Sims 4, and more — without complicated 3D software.',
    url: 'https://outofreach3d.com',
    siteName: 'OUTOFREACH3D',
    images: [
      {
        url: 'https://outofreach3d.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OUTOFREACH3D™ - Create 3D Products for the virtual world',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OUTOFREACH3D™ - Create Virtual Products',
    description: 'Create virtual products for IMVU, Second Life, Sims 4, Roblox, Inzoi, GTA 6 and more. Design once, sell everywhere.',
    images: ['https://outofreach3d.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Particles />
        {children}
        <CookieConsent />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
