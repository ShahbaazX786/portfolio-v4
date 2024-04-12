"use client";

import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './shared/sectionHeading';

const AboutComponent = () => {
    const { ref } = useSectionInView("About", 0.50);

    return (
        <section ref={ref} className='text-center mb-20 xxs:mb-16 md:max-w-[40rem] lg:max-w-[62rem] max-w-[65rem] scroll-mt-[3rem]' id='about'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='px-2 flex flex-col gap-4 mt-8'
            >
                <SectionHeading heading={'About me'} />
            </motion.div>
            <div className='grid grid-cols-2 mb-20 gap-6'>
                <div className='grid grid-rows-1'>
                    <Image src={'/images/about/hobby.png'} height={500} width={500} alt='About me' quality={100} priority className='w-full h-full rounded-md bg-contain grayscale shadow-lg hover:grayscale-0 transition-all ease-linear dark:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]' />
                </div>
                <div className='grid grid-flow-row text-left text-base dark:text-gray-300'>
                    <p className='text-base leading-7'>Back in 2020, as a Novice, I started self-learning things online from complete fundamentals and then got really interested in coding with C and C++. And things got even more exciting as I was discovering web development and all the cool frameworks out there. Fast forward to today and I&apos;ve had the privilege of building software for an <span className='font-extrabold'>car agency</span>, a <span className='font-extrabold'>start-up</span>, and multiple products for clients in a <span className='font-extrabold'>huge corporation</span>.</p>
                    <br />
                    <p className='text-base leading-7'>My main focus in current organization is building accessible user interfaces for our clients at <span className='font-extrabold'>Accenture</span>. I enjoy building software in the sweet spot where design and engineering meet — things that look <span className='font-extrabold'>great</span> and are also <span className='font-extrabold'>well-made</span> under the hood.</p>
                    <br />
                    <p className='text-base leading-7'>When I&apos;m not at the computer, I&apos;m usually reading fantasy web novels, cathing up with few of the trending movies and shows, hanging out with my cat, spending time with family & friends, and learning new vocabulary in different languages.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent;