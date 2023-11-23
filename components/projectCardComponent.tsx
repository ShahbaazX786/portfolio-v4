"use client";

import React, { useRef } from 'react'
import { ProjectCardProps } from '@/lib/types';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';

const ProjectCardComponent = ({ title, description, tags, imageUrl }: ProjectCardProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const transformedScale = useTransform(scrollYProgress, [0,1], [0.786 , 1]);
    const transformedOpacity = useTransform(scrollYProgress, [0,1], [0.6 , 1]);

    return (
        <motion.div style={{ scale: transformedScale, opacity: transformedOpacity }} ref={ref} className='group mb-4 sm:mb-8 last:mb-2 shadow-md'>
            <section className='lg:max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 bg-gray-100 relative sm:h-80 shadow-sm hover:bg-gray-200 transition rounded-md group-even:pl-12'>
                <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full justify-start group-even:ml-[22.5rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (<li className='bg-black/[0.7] px-3 py-2 text-sm uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={90} className='delay-200 cursor-pointer absolute top-8 -right-40 w-[32rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:scale-[1.2] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 transition ease-linear group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3' />
            </section>
        </motion.div>
    )
}

export default ProjectCardComponent;