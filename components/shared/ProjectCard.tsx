
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { CiFolderOn } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import TooltipRE from '../shadcn-simplified/reusable-tooltip';


export type ProjectCardProps = {
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
                    <div className='flex flex-row justify-between'>
                        <Button variant="noShow" size="icon"><VscGithubAlt size={20} /></Button>
                        <Button variant="noShow" size="icon"> <RiShareBoxLine size={20} /></Button>
                    </div>
                </div>
                <CardTitle className='text-xl capitalize'>Project Title Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardTitle>
                <CardDescription>Project Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eligendi corporis delectus eius pariatur consequatur accusantium facilis fugit saepe.</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <TooltipRE trigger={<FaReact size={20} />} tooltip='React' delay={400} />
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;