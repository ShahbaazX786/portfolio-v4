"use client";

import { useSectionInView } from '@/hooks/useSectionInView';
import StylishButton from './shared/StylishButton';
import SectionHeading from './shared/sectionHeading';

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const ContactComponent = () => {
    const { ref } = useSectionInView("Contact");

    return (
        <section ref={ref} id='contact' className='lg:max-w-[50rem] xxs:w-64 xs:max-w-sm sm:max-w-sm sm:mb-0 md:mb-28 scroll-mt-28 mt-4 xxs:mt-10'>
            <SectionHeading heading={'Contact Me'} />
            <p className='text-gray-800 text-lg'>Currently I&apos;m actively looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            <Sheet>
                <SheetTrigger asChild>
                    <span className='mt-10 flex flex-row justify-center items-center'>
                    <StylishButton  />
                    </span>
                </SheetTrigger>
                <SheetContent side={'right'}>
                    <SheetHeader>
                        <SheetTitle className='text-xl'>Hi There!</SheetTitle>
                        <SheetDescription className='text-lg'>
                           You can get in touch with me or follow me on these channels.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">

                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default ContactComponent;