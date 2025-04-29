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
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
} 