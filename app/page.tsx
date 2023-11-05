import AboutComponent from "@/components/about";
import HeroComponent from "@/components/hero";
import SectionDividerComponent from "@/components/shared/sectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* <h1 className="text-5xl font-bold transition-all ease-linear hover:scale-110 text-center mx-auto my-auto pt-12">Bismillah</h1> */}
      <HeroComponent />
      <SectionDividerComponent />
      <AboutComponent />
    </main>
  )
}
