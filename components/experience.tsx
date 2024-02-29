"use client";

import { useSectionInView } from '@/hooks/useSectionInView';
import React from 'react';
import SectionHeading from './shared/sectionHeading';

import { experiencesData } from '@/lib/data';
import { verticalTimelineElementArrowStyle, verticalTimelineElementIconStyle, verticalTimelineElementStyle } from '@/lib/external-styles';

//3rd party imports
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceComponent = () => {
    const { ref } = useSectionInView("Experience", 0.1);

    return (
        <section ref={ref} id='experience' className='lg:max-w-[50rem] xxs:max-w-xs xs:max-w-sm sm:max-w-md sm:mb-0 md:mb-28 scroll-mt-28 mt-4'>
            <SectionHeading heading={'Experience'} />
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    // As this is a 3rd party library component that im not sure of its internal structure, so why not just wrap it in a fragment and give key to my own fragment instead of of some 3rd party library component.
                    <React.Fragment key={index}>
                        <VerticalTimelineElement visible={true}
                            // passing styles as objects as this is 3rd party library component, so it will most probably not take tailwind classes.
                            contentStyle={verticalTimelineElementStyle}
                            iconStyle={verticalTimelineElementIconStyle}
                            contentArrowStyle={verticalTimelineElementArrowStyle}
                            date={item.date}
                            icon={item.icon}>
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!font-normal text-gray-700 !mt-1'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default ExperienceComponent;