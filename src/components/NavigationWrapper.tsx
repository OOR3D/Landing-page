'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import Header from "@/components/Header"

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
} 