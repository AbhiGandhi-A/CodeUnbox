'use client'

import type React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
  children: React.ReactNode
}

// Combine all client-side providers here.
export function Providers({ children }: ProvidersProps) {
  return (
    // NextAuth's SessionProvider must wrap any component that uses 'useSession'
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  )
}