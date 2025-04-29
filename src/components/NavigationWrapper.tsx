'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import Header from "@/components/Header"
import CustomCursor from "@/components/CustomCursor"

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="[&_*]:cursor-none">
        <CustomCursor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
} 