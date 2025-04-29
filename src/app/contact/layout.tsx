import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | OOR3D™",
  description: "Get in touch with OOR3D™. Email us for support or join our Discord community for real-time updates and assistance.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 