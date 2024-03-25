CL-4.2.9.6.3: Added New Resume.

CL-4.2.9.6.2: Minor bug fixes and Deleted Resume.

CL-4.2.9.6.1: Minor Spacing bug fix in contact section.

CL-4.2.9.6: Dark Mode optimizations.
- Layout, Header, Footer, Contact, custom Message, social sheet.
- Added 2 new icons in footer.

CL-4.2.9.5.1: Minor animation optimization.

CL-4.2.9.5: Refactored Header component.
- Added hide on scroll animation.
- Added a scroll direction hook.
- Changed button variant in darkmodeswitcher.

CL-4.2.9.4: Refactored BrandName component.
- Old file deletion and new file updation.
- Imports organized.

CL-4.2.9.3: Refactored BrandName component.
- Added brand name + logo.
- Added theme switcher.
- Added framer-motion animations.

CL-4.2.9.2: Refactored BrandName component.

CL-4.2.9.1: Missed types in previous commit. 

CL-4.2.9: Added Existing Dark Mode checking and applying it to theme switcher.

CL-4.2.8: Added Dark Mode theme switcher.

CL-4.2.7.2: Added .env file to gitignore list.

CL-4.2.7.1: Added .env file structure.

CL-4.2.7: Added toast messages.

CL-4.2.6.7: Replaced normal toasts with sonner toasts.

CL-4.2.6.6: Replaced normal toasts with sonner toasts.

CL-4.2.6.5: Added toaster context in root layout of the project to display toasts.

CL-4.2.6: Integrated Mongo DB atlas with portfolio
- Created a new MongoDB atlas account with shal78.
- copied the password along with uri in a safe virtual place.
- installed mongoose lib.
- created a new mongo model for customMessage.
- created a new mongo schema for customMessage.
- Added a new API route for storing the message in mongo db using api/contact post API.
- created a mongo connection function in lib.

CL-4.2.5: Refactoring code.

CL-4.2.4: Integrate Resend with custom Message Dialog.
- Followed resend docs and integrated resend with portfolio.
- Resend is just used to send a reply message / email to the user who sent us an email first.

CL-4.2.3: Added a custom Message Dialog.
- Installed zod for form validation.
- utilized and created a reusable dialog component from shadcn ui component.
- Added and styled the custom message component.

CL-4.2.2.5: Added a button in socials sheet.

CL-4.2.2: Added Socials in contact page button.
- Changed the shining color in stylish button.
- Added contact card component.
- Used contact card component to render socials in contact page button.

CL-4.2.1.3: Updated project card component.

CL-4.2.1.2: Updated Contact page:
- Added a new stylish button component.
- Added a sheet flyover whenver say hello button is clicked.

CL-4.2.1.1: Modified Heading component styles.

CL-4.2.1: Added Footer Component:
- Created a reusable component with shadcn ui's tooltip component.
- created types for footer props.

CL-4.2.0.2: Added a new shadcn ui Project Card Component.

CL-4.2.0.1: Installing and configuring Shadcn ui - 2

CL-4.2.0: Installing and configuring Shadcn ui - 1

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