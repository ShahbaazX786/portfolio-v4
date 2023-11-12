'use client';

import React from 'react'
import { motion } from 'framer-motion'

import { HeaderLinks } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import HeaderAnime from './header-anim';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';

const Header = () => {

  const { activeLink, setActiveLink, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className='relative z-[999] '>
      <motion.div className='fixed top-6 rounded-full left-1/2 w-[36rem] h-[3.25rem] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] xxs:w-[98%] xs:w-11/12'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}>
      </motion.div>

      <motion.nav className='fixed left-1/2 -translate-x-1/2 top-[1.7rem] h-[initial] text-sm' initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}>
        <ul className='flex flex-row justify-center items-center text-sm font-medium text-gray-500 gap-5 xxs:gap-3 sm:gap-6'>
          {
            HeaderLinks.map(link => (
              <li className='h-3/4 flex items-center justify-center relative' key={link.hash}
                onClick={() => {
                  setActiveLink(link.name)
                  setTimeOfLastClick(Date.now())
                }}>
                <Link className={clsx('flex w-full items-center justify-center p-3 hover:text-gray-950 transition xxs:py-3 xxs:px-0', { 'text-gray-950': activeLink === link.name })} href={link.hash}>
                  <div className='flex flex-row items-center justify-center xxs:w-10'>
                    <Image src={link.path} alt={link.name} width={100} height={100} priority className='xxs:visible xs:visible sm:hidden xxs:mx-0 xxs:px-3 xs:mx-2 xs:px-2 xs:my-auto scale-150' />
                    <span className='xxs:hidden xs:hidden sm:visible text-sm font-medium'>{link.name}</span>
                    {link.name === activeLink &&
                      (<HeaderAnime layoutId={activeLink} />)
                    }
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