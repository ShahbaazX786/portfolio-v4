import AboutComponent from "@/components/about";
import HeroComponent from "@/components/hero";
import ProjectsComponent from "@/components/projects";
import SectionDividerComponent from "@/components/shared/sectionDivider";
import LeftSocialComponent from "@/components/shared/leftSocial";
import RightSocialComponent from "@/components/shared/rightSocial";
import SkillsComponent from "@/components/skills";
import ExperienceComponent from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center relative">
      <div className="fixed bottom-0 left-5">
        <LeftSocialComponent />
      </div>
      <div className="fixed bottom-0 right-5">
        <RightSocialComponent />
      </div>
      {/* <h1 className="text-5xl font-bold transition-all ease-linear hover:scale-110 text-center mx-auto my-auto pt-12">Bismillah</h1> */}
      <HeroComponent />
      <SectionDividerComponent />
      <AboutComponent />
      <SectionDividerComponent />
      <ProjectsComponent />
      <SectionDividerComponent />
      <SkillsComponent />
      <ExperienceComponent />
    </main>
  )
}
