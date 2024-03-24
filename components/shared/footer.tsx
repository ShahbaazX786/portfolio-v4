import TooltipRE from '../shadcn-simplified/reusable-tooltip';

import { FaReact } from "react-icons/fa";
import { SiRadixui, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";


const TechStack = [
    {
        icon: <TbBrandNextjs size={22} className='hover:text-blue-800' />,
        name: 'Nextjs'
    },
    {
        icon: <FaReact size={22} className='hover:text-blue-800' />,
        name: 'React'
    },
    {
        icon: <SiTailwindcss size={22} className='hover:text-blue-800' />,
        name: 'Tailwind'
    },
    {
        icon: <TbBrandFramerMotion size={22} className='hover:text-blue-800' />,
        name: 'Framer Motion'
    },
    {
        icon: <SiRadixui size={20} className='hover:text-blue-800' />,
        name: 'Shadcn UI'
    },
]

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-8 gap-4'>
            <p className='text-base font-semibold text-gray-800'>Developed by Shaik Shahbaaz Alam &copy;{getYear()}</p>
            <span className='flex flex-row gap-4 text-center'>
                {TechStack.map((item, index) => (
                    <TooltipRE trigger={item.icon} tooltip={item.name} delay={200} key={index} />
                ))}
            </span>
        </div>
    )
}

export default Footer