"use client";

import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import SectionHeading from './shared/sectionHeading';
import { useSectionInView } from '@/hooks/useSectionInView';

const AboutComponent = () => {
    const { ref } = useSectionInView("About", 0.75);

    return (
        <section ref={ref} className='text-center mb-20 xxs:mb-16 md:max-w-[40rem] lg:max-w-[60rem] max-w-[60rem] scroll-mt-28 mt-4' id='about'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='px-2 flex flex-col gap-4 mt-24'
            >
                <SectionHeading heading={'About me'} />
                <p className='text-center text-lg xxs:text-base sm:text-lg md:text-xl lg:text-2xl px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste ullam amet, ut est corrupti a velit dolor nobis repudiandae nemo blanditiis tempora optio laboriosam libero perspiciatis quidem! Eaque, laborum.</p>
                <p className='text-center text-lg xxs:text-base sm:text-lg md:text-xl lg:text-2xl px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste ullam amet, ut est corrupti a velit dolor nobis repudiandae nemo blanditiis tempora optio laboriosam libero perspiciatis quidem! Eaque, laborum.</p>
            </motion.div>
        </section>
    )
}

export default AboutComponent;