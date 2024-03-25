import TooltipRE from '../shadcn-simplified/reusable-tooltip';

import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiRadixui, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";


const TechStack = [
    {
        icon: <TbBrandNextjs size={22} className='hover:text-blue-800' />,
        name: 'Nextjs'
    },
    {
        icon: <FaReact size={22} className='hover:text-[#61DBFB]' />,
        name: 'React'
    },
    {
        icon: <SiTailwindcss size={22} className='hover:text-[#61DBFB]' />,
        name: 'Tailwind'
    },
    {
        icon: <TbBrandFramerMotion size={22} className='hover:text-[#EE00B7]' />,
        name: 'Framer Motion'
    },
    {
        icon: <SiRadixui size={20} className='hover:text-blue-800' />,
        name: 'Shadcn UI'
    },
    {
        icon: <FaNodeJs size={20} className='hover:text-green-500' />,
        name: 'Node JS'
    },
    {
        icon: <SiMongodb size={20} className='hover:text-green-700' />,
        name: 'Mongo DB'
    },
]

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-8 gap-4'>
            <p className='text-sm font-semibold text-gray-800 dark:text-gray-400'>Developed by Shaik Shahbaaz Alam &copy;{getYear()}</p>
            <span className='flex flex-row gap-4 text-center'>
                {TechStack.map((item, index) => (
                    <TooltipRE trigger={item.icon} tooltip={item.name} delay={200} key={index} />
                ))}
            </span>
        </div>
    )
}

export default Footer