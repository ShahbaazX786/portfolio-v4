CL-4.0.6: Added Header Animation, Refactoring & Code Optimizations.
- Decreased color contrast of left/right social components.
- Added ids to components so that we can scroll down to particular section upon clicking header.
- Updated Hero section intro.
- Updated scroll behaviour to smooth.
- Added scroll-margin-top to make sure upon clicking menu links every section's content is properly aligned and visible. 
- Added custom hooks (useSectionInView) to track the ref/inView status and (useActiveSectionContext) to handle context provider exceptions.
- installed 3rd party libraries like **react-intersection-observer** to track the html element is in view or not. And Installed **clsx** to add conditional styling to header animations. 
- Added interfaces and types wherever required.

CL-4.0.5: Added Projects.
- Added Project component.
- Added Project assets and types.
- Added ProjectCard component.
- Updated sectionHeading styles.


CL-4.0.4: Added side Components.
- Added socials component for left side.
- And added emailto for right side.


CL-4.0.3: Added Dummy About me Component.
- Restructured components.
- Added about me component.


CL-4.0.2: Added Hero Component.
- Added 2 new assets(profile) & dummy pdf file.
- Installed react-icons to add icons easily.
- Updated layout.tsx file.
- Added Hero component.
- Added animations for the Hero component.


CL-4.0.1: Added header component.
- Installed framer motion
- Added HeaderComponent.
- Added few svg assets in public folder.
- Updated tailwind config file.
- Updated favicon.
- Deleted default globals.css
- Deleted some unnecessary assets.
- Updated layout file and added meta data.
- Added a data.ts file to store some constants.

CL-4.0.0: Initialized nextjs project.
- Node: 20.9.0
- Nextjs: 14.0.0 / Reactjs: 18
- Codebase: Typescript 5.
- Styling: Tainwind 3.
- Linting: Eslint 8.
- Layout: App Router.
- Import alias: @/..