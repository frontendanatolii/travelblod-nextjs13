import { MainNavigation } from '@/components/Navigation/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Navigation/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explorer',
  description: 'Visit any part of world with me!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        <div className='pt-10'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
