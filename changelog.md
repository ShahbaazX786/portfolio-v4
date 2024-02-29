CL-4.1.5: Minor Bug Fix:

CL-4.1.4: Brand Name:
- Added Brand Name with animations.

CL-4.1.3: Updating Readme:
- Updating Readme.

CL-4.1.2: Added Contact Section:
- Added just design for now.
- Added box-shadow for few sections.


CL-4.1.0: Improvements/Bug-Fixes:
- Improved exp section.
- Rearranged sections.
- Updated exp external-styles.
- Updated exp responsiveness.


CL-4.0.9: Added Experience Section.
- Added Experience section. 
- But this ain't working right. Maybe I will change this later.

CL-4.0.8: Added Skills Section.
- Added Skills section.
- Updated data.ts file.
- Updated mainpage.tsx file.
- Used useSectionInView to utilize the step by step skill drop animation.

CL-4.0.7: Optimization: Installed sharp package for Image optimizations.
- When **npm run build** is executed it strongly recommended to install **sharp** package to further optimize the images in the app.
- Tip: If you want to see how the final prod build will look like just follow the below steps:
    - Execute **npm run build** first.
    - Then execute **npm run start**.
    - Then open the browser and check if the website is working as expected.
- Added custom styling to scrollbar and scrollthumb.

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