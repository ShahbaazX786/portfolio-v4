import { ReactElement } from 'react'
import TooltipRE from '../shadcn-simplified/reusable-tooltip'
import { Card, CardContent } from '../ui/card'

export type ContactCardProps = {
    icon: string | ReactElement,
    tag: string,
    social: string,
    username: string,
    link: string,
}

const ContactCard = ({ icon, tag, social, username, link }: ContactCardProps) => {
    return (
        <a href={link} target='_blank'>
            <Card className='w-full py-4 text-sm text-center shadow-md hover:scale-110 ease-linear transition-all cursor-pointer'>
                <CardContent className='flex flex-col justify-center items-center gap-2'>
                    <span className='py-2'>{icon}</span>
                    <span className='font-semibold'>{tag}</span>
                    <TooltipRE key={social} delay={200} trigger={social} tooltip={username} />
                </CardContent>
            </Card>
        </a>
    )
}

export default ContactCard