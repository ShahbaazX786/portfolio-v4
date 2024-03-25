import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import ActiveSectionContextProvider from '@/components/shared/activeSectionContextProvider'
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/Header';
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Toaster } from '@/components/ui/sonner'
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
        "bg-zinc-100 dark:bg-[#0A192E] text-gray-950 dark:text-gray-100 relative font-sans", fontSans.variable)}>
        <div className='bg-[#dbd7fb] dark:bg-black absolute top-[-6rem] right-[11rem] h-[31.23rem] w-[31.23rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10'></div>
        <div className='bg-[#fbe2e3] dark:bg-black absolute top-[-1rem] left-[-35rem] h-[31.23rem] w-[31.23rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10'></div>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
