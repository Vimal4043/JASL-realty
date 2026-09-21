import AboutIntroduction from './AboutIntroduction.jsx'
import AboutCTA from './AboutCTA.jsx'

export default function AboutPage() {
  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        <AboutIntroduction />
        {/* <AboutStory /> */}
        {/* <AboutProjects /> */}
        {/* <AboutValues /> */}
        <AboutCTA />
      </main>
    </>
  )
}
