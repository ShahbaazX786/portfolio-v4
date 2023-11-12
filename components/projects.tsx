"use client";

import React from 'react'
import SectionHeading from './shared/sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCardComponent from './projectCardComponent';
import { useSectionInView } from '@/hooks/useSectionInView';

const ProjectsComponent = () => {
    const { ref } = useSectionInView("Projects", 0.24);

    return (
        <section ref={ref} className='mb-28 max-w-[50rem] sm:mb-0 scroll-mt-28 mt-4' id='projects'>
            {/* Bismillah */}
            <SectionHeading heading={'Projects'} />
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <ProjectCardComponent {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default ProjectsComponent;