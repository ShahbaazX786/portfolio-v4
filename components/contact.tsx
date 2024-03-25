"use client";

import { useSectionInView } from '@/hooks/useSectionInView';
import StylishButton from './shared/StylishButton';
import SectionHeading from './shared/sectionHeading';

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import ContactCard from './shared/ContactCard';
import CustomMessageDialog from './shared/customMessageDialog';



const ContactComponent = () => {
    const { ref } = useSectionInView("Contact");
    const socials = [
        {
            icon: <RxGithubLogo size={48} />,
            platform: 'Github',
            tagline: 'Follow me on',
            username: 'ShahbaazX786',
            link: 'https://github.com/ShahbaazX786',
        },
        {
            icon: <FaSquareXTwitter size={48} />,
            platform: 'X (Twitter)',
            tagline: 'Follow me on',
            username: 'shahbaazx24',
            link: 'https://twitter.com/shahbaazx24',
        },
        {
            icon: <FaLinkedin size={48} />,
            platform: 'Linkedin',
            tagline: 'Follow me on',
            username: 'shaik-shahbaaz-alam',
            link: 'https://www.linkedin.com/in/shaik-shahbaaz-alam/',
        },
        {
            icon: <SiGmail size={48} />,
            platform: 'Gmail',
            tagline: 'send a mail on',
            username: 'shahbaazalam78@gmail.com',
            link: 'mailto:shahbaazalam78@gmail.com',
        },
    ]

    return (
        <section ref={ref} id='contact' className='lg:max-w-[50rem] xxs:w-64 xs:max-w-sm sm:max-w-sm sm:mb-0 md:mb-28 scroll-mt-28 mt-4 xxs:mt-10'>
            <SectionHeading heading={'Contact Me'} />
            <p className='text-gray-800 dark:text-gray-400 text-lg'>Currently I&apos;m actively looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            <Sheet>
                <SheetTrigger asChild>
                    <span className='mt-10 flex flex-row justify-center items-center'>
                        <StylishButton />
                    </span>
                </SheetTrigger>
                <SheetContent side={'right'} className='bg-gradient-to-r from-blue-100 to-yellow-100 dark:bg-gradient-to-r dark:from-sky-900 dark:to-gray-800'>
                    <SheetHeader>
                        <SheetTitle className='text-xl dark:text-gray-200'>Hi There!</SheetTitle>
                        <SheetDescription className='text-lg text-gray-400'>
                            You can get in touch with me or follow me on these channels.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                        {socials.map((social, index) => (<ContactCard key={index} icon={social.icon} social={social.platform} tag={social.tagline} username={social.username} link={social.link} />))}
                        <CustomMessageDialog trigger={<Button className='col-span-2 mt-4'>Wanna send a specialized Message?</Button>} />
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default ContactComponent;