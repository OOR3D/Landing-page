"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Particles from "@/components/Particles"
import Script from 'next/script'
import CookieConsent from "@/components/CookieConsent"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y47H7VPS2N`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y47H7VPS2N', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Particles />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
