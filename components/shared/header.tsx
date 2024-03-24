'use client';

import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';
import { HeaderLinks } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BrandNameComponent from './brandName';
import { ModeToggle } from './darkModeSwitcher';
import HeaderAnime from './header-anim';
import useScrollDirection from '@/hooks/useScrollDirection';

const Header = () => {
    const { activeLink, setActiveLink, setTimeOfLastClick } = useActiveSectionContext();
    const scrollDirection = useScrollDirection();
    return (
        <header className={clsx('sticky', 'z-10', 'h-20', 'w-full', 'bg-gray-0', 'rounded-md', 'bg-clip-padding', 'backdrop-filter', 'backdrop-blur-xl', 'bg-opacity-0', 'transition-all', 'ease-linear', { 'top-0': scrollDirection === 'top' }, { '-top-24': scrollDirection === 'down' })}>
            <motion.div initial={{ y: -100, x: 0, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className='flex flex-row justify-between items-center bg-transparent mx-10 ease-linear'>
                <BrandNameComponent />
                <div>
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
                </div>
                <ModeToggle />
            </motion.div>
        </header>
    )
}

export default Header;