import React, { ReactElement } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export type TooltipREProps = {
    trigger: string | ReactElement;
    tooltip: string;
    delay : number
};

const TooltipRE = ({ trigger, tooltip, delay }: TooltipREProps) => {
    return (
        <TooltipProvider delayDuration={delay}>
            <Tooltip>
                <TooltipTrigger>
                    {trigger}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipRE;