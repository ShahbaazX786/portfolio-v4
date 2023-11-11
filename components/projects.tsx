import React from 'react'
import SectionHeading from './shared/sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCardComponent from './projectCardComponent';

const ProjectsComponent = () => {
    return (
        <section className='mb-28 max-w-[50rem] sm:mb-0'>
            {/* Bismillah */}
            <SectionHeading heading={'Projects'} />
            <div>
                {projectsData.map((project, index) =>(
                    <React.Fragment key={index}>
                        <ProjectCardComponent {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default ProjectsComponent;