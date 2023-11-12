import React from 'react'
import { motion } from 'framer-motion';

const HeaderAnime = ({ layoutId }: any) => {
    return (
        <motion.span className='bg-gradient-to-r from-green-200 to-sky-300 rounded-full absolute inset-0 -z-10 py-2' layoutId={layoutId}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.2, stiffness: 300, damping: 15 }}
        ></motion.span>
    )
}

export default HeaderAnime;