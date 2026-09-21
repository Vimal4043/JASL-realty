import FAQHero from './FAQHero.jsx'
import FAQPropertyInfo from './FAQPropertyInfo.jsx'
import FAQPricing from './FAQPricing.jsx'
import FAQBuyingProcess from './FAQBuyingProcess.jsx'
import FAQAmenities from './FAQAmenities.jsx'
import FAQCTA from './FAQCTA.jsx'
import FAQFinance from './FAQFinance.jsx'

export default function FAQsPage() {
  return (
    <>
      <main>
        <FAQHero />
        <FAQPropertyInfo />
        <FAQPricing />
        <FAQBuyingProcess />
        <FAQAmenities />
        <FAQFinance />
        <FAQCTA />
      </main>
    </>
  )
}
