'use client';

import { motion } from 'framer-motion';

const RightSocialComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className='flex flex-row xxs:hidden xs:hidden sm:hidden md:flex'>
            <div className='relative hover:text-gray-950 cursor-pointer transition-all ease-linear'>
                <a href="mailto:shahbaazshaik78@gmail.com" className='absolute text-gray-600 -top-32 -left-[6.8rem] rotate-90 text-base '>shahbaazshaik78@gmail.com</a>
            </div>
            <span className='bg-gray-500 h-40 w-[2px]  mt-8 rounded-full hidden sm:block'></span>
        </motion.div>
    )
}

export default RightSocialComponent;