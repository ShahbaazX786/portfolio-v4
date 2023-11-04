'use client';

import React from 'react'
import { motion } from 'framer-motion'

import { HeaderLinks } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='relative z-[999] '>
      <motion.div className='fixed top-6 rounded-full left-1/2 w-[36rem] h-[3.25rem] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] xxs:w-11/12 xs:w-11/12'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}>
      </motion.div>
      
      <motion.nav className='fixed left-1/2 -translate-x-1/2 top-[1.7rem] h-[initial] text-sm' initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}>
        <ul className='flex flex-row justify-center items-center text-sm font-medium text-gray-500 gap-5 sm:gap-6'>
          {
            HeaderLinks.map(link => (
              <li className='h-3/4 flex items-center justify-center' key={link.hash}>
                <Link className='flex w-full items-center justify-center p-3 hover:text-gray-950 transition xxs:py-3 xxs:px-0' href={link.hash}>
                  <div className='flex flex-row items-center justify-center'>
                    <Image src={link.path} alt={link.name} width={100} height={100} priority className='xxs:visible xs:visible sm:hidden xxs:mx-3 xs:mx-4 scale-150' />
                    <span className='xxs:hidden xs:hidden sm:visible text-sm font-medium'>{link.name}</span>
                  </div>
                </Link>
              </li>)
            )
          }
        </ul>
      </motion.nav>
    </header>
  )
}

export default Header;