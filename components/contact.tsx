"use client";

import React from 'react'
import SectionHeading from './shared/sectionHeading';
import { useSectionInView } from '@/hooks/useSectionInView';
import { FaPaperPlane } from 'react-icons/fa';

const ContactComponent = () => {
    const { ref } = useSectionInView("Contact");

    return (
        <section ref={ref} id='contact' className='lg:max-w-[50rem] xxs:w-64 xs:max-w-sm sm:max-w-sm sm:mb-0 md:mb-28 scroll-mt-28 mt-4 xxs:mt-10'>
            <SectionHeading heading={'Contact Me'} />
            <div>
                You can contact me directly by clicking over right side or via this form.
            </div>
            <form className='mt-10 flex flex-col justify-center items-center gap-2'>
                <input type="email" className='h-14 w-full rounded-lg border-black/[0.1] shadow-md text-left my-auto pl-4 border-t-4 border-t-[#00d4ff]' placeholder='Your Email Address'/>
                <input type="Subject" className='h-14 w-full rounded-lg border-black/[0.1] shadow-md text-left my-auto pl-4 border-t-4 border-t-[#00d4ff]' placeholder='Subject' />
                <textarea className='h-52 min-h-min rounded-lg border-black/[0.1] my-3 p-4 w-full shadow-md border-t-4 border-t-[#00d4ff]' placeholder='Message to me' />
                <button type='submit' className='h-12 text-white rounded-full bg-gray-950 outline-none transition-all w-32 gap-2 flex flex-row items-center justify-center'>Submit <FaPaperPlane /></button>
            </form>
        </section>
    )
}

export default ContactComponent;