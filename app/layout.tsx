import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
// Remove import for ThemeProvider as it's now inside Providers
// import { ThemeProvider } from "./theme-provider"
import { Providers } from "./providers" // <-- NEW IMPORT
import "./globals.css"
<script src="https://checkout.razorpay.com/v1/checkout.js" async></script>

export const metadata: Metadata = {
  title: "Code Explorer - Developer Tool",
  description: "Upload and explore your code with a VS Code-like file tree interface. Perfect for developers.",
  openGraph: {
    title: "Code Explorer",
    description: "Upload ZIP files and explore code with syntax highlighting",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Wrap children with the new Providers component */}
        <Providers> 
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}