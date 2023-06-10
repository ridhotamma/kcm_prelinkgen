'use client'

import CustomAppBar from '@/components/CustomAppBar'
import { Inter } from 'next/font/google'
import './globals.css'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KCM Prelink Generator',
  description: 'Generate and Preview Prelink at Kompas.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomAppBar />
        {children}
      </body>
    </html>
  )
}
