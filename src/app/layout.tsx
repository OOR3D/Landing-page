import { Inter } from 'next/font/google'
import './globals.css'
import Particles from '@/components/Particles'
import CookieConsent from '@/components/CookieConsent'
import Script from 'next/script'
import MobileWarning from '@/components/MobileWarning'
import { Metadata } from 'next'
import { metadata as siteMetadata } from './metadata'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          defer
          data-website-id="68da666d2826e137a0b58749"
          data-domain="outofreach3d.com"
          src="https://datafa.st/js/script.js">
        </script>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'OUTOFREACH3D',
              applicationCategory: 'DesignApplication',
              operatingSystem: 'Web',
              description: 'Create 3D items for IMVU, Second Life, Sims 4, Roblox, Inzoi, GTA 6 and more.',
              image: 'https://assets.oor3d.com/img/card-actions/The%20universal%20virtual%20world%20creator%20workspace.png',
              author: {
                '@type': 'Organization',
                name: 'OUTOFREACH3D',
                url: 'https://outofreach3d.com',
                logo: 'https://assets.oor3d.com/img/card-actions/The%20universal%20virtual%20world%20creator%20workspace.png'
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Particles />
        <MobileWarning />
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
