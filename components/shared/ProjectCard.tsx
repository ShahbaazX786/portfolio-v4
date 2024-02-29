import React from 'react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { CiFolderOn } from "react-icons/ci";
import { RiShareBoxLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';


type ProjectCardProps = {
    title: string,
    desc: string,
    skills: Array<string>
}



const ProjectCard = () => {
    return (
        <Card className="w-[310px]">
            <CardHeader>
                <div className='flex flex-row justify-between items-center mb-4'>
                    <Button variant="noShow" size="icon"><CiFolderOn size={32} /></Button>
                    <div className='flex flex-row justify-between gap-2'>
                        <VscGithubAlt size={20} />
                        <RiShareBoxLine size={20} />
                    </div>
                </div>
                <CardTitle className='text-xl capitalize'>Project Title Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardTitle>
                <CardDescription>Project Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eligendi corporis delectus eius pariatur consequatur accusantium facilis fugit saepe.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <FaReact size={20} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>React</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;