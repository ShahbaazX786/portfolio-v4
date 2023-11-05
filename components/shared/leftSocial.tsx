'use client';

import React from 'react'
import { LuGithub, LuLinkedin, LuTwitter, LuInstagram, LuMail } from "react-icons/lu";
import { motion } from 'framer-motion';

const LeftSocialComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{delay:0.5}}
            className='flex flex-col justify-center items-center xxs:hidden xs:hidden sm:hidden md:flex'>
            <div className='flex flex-col justify-center items-center gap-6 cursor-pointer'>
                <span className='hover:scale-[1.8] scale-150 hover:text-green-600 transition-all ease-linear duration-100'> <LuGithub /></span>
                <span className='hover:scale-[1.8] scale-125 hover:text-blue-600 transition-all ease-linear duration-100'> <LuLinkedin /></span>
                <span className='hover:scale-[1.8] scale-125 hover:text-blue-400 transition-all ease-linear duration-100'> <LuTwitter /></span>
                <span className='hover:scale-[1.8] scale-125 hover:text-pink-600 transition-all ease-linear duration-100'> <LuInstagram /></span>
                <span className='hover:scale-[1.8] scale-125 hover:text-orange-600 transition-all ease-linear duration-100'> <LuMail /></span>
            </div>
            <span className='bg-gray-950 h-40 w-[2px] mt-8 rounded-full hidden sm:block'></span>
        </motion.div>
    )
}

export default LeftSocialComponent;