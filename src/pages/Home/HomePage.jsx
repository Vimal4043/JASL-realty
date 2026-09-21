import Hero from './Hero.jsx'
import FeaturedProperties from './FeaturedProperties.jsx'
import Form from './Form.jsx'
import AboutUs from './AboutUs.jsx'
import ContactInfo from './ContactInfo.jsx'

export default function HomePage() {
  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        <Hero />
        <FeaturedProperties />
        <AboutUs />
        <Form />
        {/* <Services /> */}
        {/* <VisionMissionValues /> */}
        {/* <Benefits /> */}
        {/* <TopProperties /> */}
        {/* <Testimonials /> */}
        <ContactInfo />
      </main>
    </>
  )
}
