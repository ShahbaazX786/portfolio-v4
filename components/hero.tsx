"use client";

import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsDownload, BsFillArrowRightCircleFill } from "react-icons/bs";

const HeroComponent = () => {
    const { ref } = useSectionInView("Home", 0.1);

    return (
        <section ref={ref} className='md:max-w-[40rem] lg:max-w-[60rem] max-w-[60rem] text-center sm:mb-0 scroll-mt-[80rem] mt-10' id='home'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='my-10 xxs:text-base sm:text-lg md:text-xl lg:text-2xl'>
                <div className='flex flex-col justify-start items-start gap-5'>
                    <span className='text-base text-black dark:text-sky-400 font-mono'>Hi there, my name is </span>
                    <h2 className='text-7xl font-bold text-gray-900 dark:text-slate-200'>Shaik Shahbaaz Alam.</h2>
                    <h3 className='text-6xl font-bold text-gray-800 dark:text-slate-400'>I build stuff for the internet.</h3>
                    <p className='text-base leading-7 text-left text-gray-700 dark:text-slate-400 w-2/3'>I&apos;m a software engineer who specializes in creating amazing digital experiences. Right now, my main focus is on making user-friendly front-end products at <a href='www' target='_blank' className='text-blue-800 dark:text-sky-400 hover:underline'>Accenture</a>.</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='flex flex-row xxs:flex-col justify-start items-start gap-5 my-10'>
                <Link href="#contact" className="flex flex-row gap-2 items-center justify-center bg-black text-white border font-normal overflow-hidden relative px-8 py-4 xxs:py-2 rounded-full hover:brightness-150 hover:scale-105 duration-300 group shadow-lg active:scale-95">
                    <span className="bg-gray-400 shadow-gray-400 absolute top-0 left-[-150%] inline-flex w-5 h-10 rounded-md opacity-50 group-hover:left-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Get in touch with me <BsFillArrowRightCircleFill />
                </Link>
                <a href="/files/resume.pdf" download className="flex flex-row gap-2 items-center justify-center bg-white text-black border font-normal overflow-hidden relative px-8 py-4 xxs:py-2 rounded-full hover:brightness-105 hover:scale-105 duration-300 group shadow-lg active:scale-95">
                    <span className="bg-gray-300 shadow-gray-400 absolute top-0 right-[-150%] inline-flex w-5 h-10 rounded-md opacity-50 group-hover:right-[150%] duration-500 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]"></span>
                    Download Resume <BsDownload />
                </a>
            </motion.div>
        </section>
    )       
}

export default HeroComponent;