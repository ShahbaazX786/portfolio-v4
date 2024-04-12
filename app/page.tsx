import AboutComponent from "@/components/about";
import ContactComponent from "@/components/contact";
import ExperienceComponent from "@/components/experience";
import HeroComponent from "@/components/hero";
import ProjectsComponent from "@/components/projects";
import LeftSocialComponent from "@/components/shared/leftSocial";
import SectionDividerComponent from "@/components/shared/sectionDivider";
import SkillsComponent from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center relative">
      <div className="fixed bottom-0 left-5">
        <LeftSocialComponent />
      </div>
      {/* <h1 className="text-5xl font-bold transition-all ease-linear hover:scale-110 text-center mx-auto my-auto pt-12">Bismillah</h1> */}
      {/* <ProjectCard /> */}
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <SectionDividerComponent />
      <ProjectsComponent />
      <SectionDividerComponent />
      <ExperienceComponent />
      <ContactComponent />
    </main>
  )
}
