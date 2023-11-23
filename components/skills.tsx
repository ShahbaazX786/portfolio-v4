"use client";

import React from 'react'
import SectionHeading from './shared/sectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';

const fadeInAnimation = {
  initial:{
    opacity:0,
    y:100
  },
  // converting this property to a function will help us to increase the delay a bit more while rendering the skills one by one.
  animate: (moreDelay:number) => ({
    opacity:1,
    y:0,
    transition:{
      delay: 0.05*moreDelay
    }
  })
};

const SkillsComponent = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id='skills' className='max-w-[50rem] sm:mb-0 md:mb-28 scroll-mt-28 mt-4'>
      <SectionHeading heading={"Skills"} />
      <ul className='flex flex-row flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {
          skillsData.map((skill, index) => (
            // once:true will lead to rendering the animation only once
            <motion.li variants={fadeInAnimation} initial="initial" whileInView="animate" custom={index} viewport={{once:true}} key={index} className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 cursor-pointer !hover:scale-105 shadow-md'>{skill}</motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default SkillsComponent;