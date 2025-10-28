import { Inter } from 'next/font/google'
import './globals.css'
import Particles from '@/components/Particles'
import CookieConsent from '@/components/CookieConsent'
import Script from 'next/script'
import type { Metadata } from 'next'
import MobileWarning from '@/components/MobileWarning'
import { ConvexClientProvider } from '@/components/ConvexClientProvider'

const inter = Inter({ subsets: ["latin"] })

// Metadata is now centralized in metadata.ts and imported in page.tsx

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
      </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          <Particles />
          <MobileWarning />
          {children}
          <CookieConsent />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        </ConvexClientProvider>
      </body>
    </html>
  )
}
