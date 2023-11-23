import project1Img from "@/public/images/projects/MediaAI.png";
import project2Img from "@/public/images/projects/AngularPortfolio3.png";
import project3Img from "@/public/images/projects/FlexDB.png";
import project4Img from "@/public/images/projects/TextUtils.png";

export const HeaderLinks = [
  {
    name: "Home",
    hash: "#home",
    path: "/icons/home.png",
  },
  {
    name: "About",
    hash: "#about",
    path: "/icons/about.png",
  },
  {
    name: "Skills",
    hash: "#skills",
    path: "/icons/skill.png",
  },
  {
    name: "Projects",
    hash: "#projects",
    path: "/icons/projects.png",
  },
  {
    name: "Experience",
    hash: "#experience",
    path: "/icons/exp.png",
  },
  {
    name: "Contact",
    hash: "#contact",
    path: "/icons/contact-us.png",
  },
] as const;

export const projectsData = [
  {
    title: "Media AI",
    description:
      "Media.ai is a wrapper around the OPEN AI API that is built into a beautiful and proper subscription based Generative AI S.A.A.S (Software As A Service) application.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma", "Vercel", "OPENAI"],
    imageUrl: project1Img,
  },
  {
    title: "FlixDB",
    description:
      "Flex DB is a Vanilla React application that is built using the fundamentals of React Hooks and Axios library to fetch the latest movie/series via OMDB API.",
    tags: ["React", "React Hooks", "API", "Axios"],
    imageUrl: project3Img,
  },
  {
    title: "Portfolio v3",
    description:
      "This project is my 3rd version of my Personal Portfolio built using almost all the intermediate and advanced concepts of Angular",
    tags: ["Angular", "Material", "Swiperjs", "Tailwind", "Firebase"],
    imageUrl: project2Img,
  },
  {
    title: "Text Utils",
    description:
      "Text Utils is a public text utility library made used to transform text.",
    tags: ["React", "Bootstrap", "windows API"],
    imageUrl: project4Img,
  },
];


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Git",
  "Node.js",
  "Express",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Angular Material",
  "Jest",
  "Accessibility",
  "Figma",
  "Photoshop",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Framer Motion",
  "Docker",
  "Kubernetes",
] as const;