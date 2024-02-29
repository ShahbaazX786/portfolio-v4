import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import Header from '@/components/shared/header'
import ActiveSectionContextProvider from '@/components/shared/activeSectionContextProvider'
import BrandNameComponent from '@/components/shared/brandName'
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Shaik Shahbaaz Alam | Portfolio v4 | 2024',
  description: 'Hey There!, This is the fourth version of my personal dev portfolio developed in the year 2024.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={cn(
        "bg-gray-50 text-gray-950 relative pt-24 font-sans", fontSans.variable)}>
        <span className="absolute top-4 left-5">
          <BrandNameComponent />
        </span>
        <div className='bg-[#dbd7fb] absolute top-[-6rem] right-[11rem] h-[31.23rem] w-[31.23rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10'></div>
        <div className='bg-[#fbe2e3] absolute top-[-1rem] left-[-35rem] h-[31.23rem] w-[31.23rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10'></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
