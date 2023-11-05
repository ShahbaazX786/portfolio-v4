"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { BsFillArrowRightCircleFill, BsDownload } from "react-icons/bs";


const HeroComponent = () => {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex justify-center items-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}>
                        <Image src={'/images/profile.png'} alt={'Shahbaaz\'s Profile Picture'} quality={100} priority width={100} height={100} className='lg:h-36 lg:w-36 h-48 w-48 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='mb-10 mt-5 px-5 xxs:text-base sm:text-lg md:text-xl lg:text-2xl'>
                <span>Hello, I&apos;m <strong>Shaik Shahbaaz Alam.</strong></span><br />
                <span>I&apos;m a <strong>Full-stack developer</strong> with <strong>2 years</strong> of experience.</span>
                <span>I Enjoy building modern sites & apps with best tech stack. </span>
                <span>My focus is in <strong>Angular</strong> And I also like to use <strong>React(Next.js)</strong></span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay:0.2}}
             className='flex flex-row xxs:flex-col justify-center items-center gap-4'>
                <Link href="#contact" className="flex flex-row gap-2 items-center justify-center bg-black text-white border font-normal overflow-hidden relative px-5 py-3 xxs:py-2 rounded-full hover:brightness-150 hover:scale-105 duration-300 group shadow-lg active:scale-95">
                    <span className="bg-gray-400 shadow-gray-400 absolute top-0 left-[-150%] inline-flex w-5 h-10 rounded-md opacity-50 group-hover:left-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Get in touch with me <BsFillArrowRightCircleFill />
                </Link>
                <a href="/files/resume.pdf" download className="flex flex-row gap-2 items-center justify-center bg-white text-black border font-normal overflow-hidden relative px-5 py-3 xxs:py-2 rounded-full hover:brightness-105 hover:scale-105 duration-300 group shadow-lg active:scale-95">
                    <span className="bg-gray-300 shadow-gray-400 absolute top-0 right-[-150%] inline-flex w-5 h-10 rounded-md opacity-50 group-hover:right-[150%] duration-500 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]"></span>
                    Download Resume <BsDownload />
                </a>
            </motion.div>

        </section>
    )
}

export default HeroComponent;