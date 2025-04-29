import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Particles from "@/components/Particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OUTOFREACH3D",
  description: "Create, Customize, and Launch Virtual Products — Effortlessly.",
  icons: {
    icon: [
      {
        url: "/OOR-LOGO.svg",
        type: "image/svg+xml",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Particles />
        {children}
      </body>
    </html>
  )
}
