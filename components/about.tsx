"use client";

import React from 'react'
import { motion } from 'framer-motion';
import SectionHeading from './shared/sectionHeading';

const AboutComponent = () => {
    return (
        <section className='text-center mb-20 xxs:mb-16 md:max-w-[40rem] lg:max-w-[60rem] max-w-[60rem]'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }} 
                className='px-2 flex flex-col gap-4'
                >
                <SectionHeading heading={'About me'} />
                <p className='text-center text-lg xxs:text-base sm:text-lg md:text-xl lg:text-2xl px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste ullam amet, ut est corrupti a velit dolor nobis repudiandae nemo blanditiis tempora optio laboriosam libero perspiciatis quidem! Eaque, laborum.</p>
                <p className='text-center text-lg xxs:text-base sm:text-lg md:text-xl lg:text-2xl px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste ullam amet, ut est corrupti a velit dolor nobis repudiandae nemo blanditiis tempora optio laboriosam libero perspiciatis quidem! Eaque, laborum.</p>
            </motion.div>
        </section>
    )
}

export default AboutComponent;