import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/font/font'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Recipe Box',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
