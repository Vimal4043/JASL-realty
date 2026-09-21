import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PROPERTIES } from '../../data/properties.js'
import PropertyGallery from './sections/PropertyGallery.jsx'
import PropertyOverview from './sections/PropertyOverview.jsx'
import PropertySpecifications from './sections/PropertySpecifications.jsx'
import PropertyDescription from './sections/PropertyDescription.jsx'
import PropertyFeatures from './sections/PropertyFeatures.jsx'
import PropertySuitableFor from './sections/PropertySuitableFor.jsx'
import PropertyLocation from './sections/PropertyLocation.jsx'
import PropertyEnquiry from './sections/PropertyEnquiry.jsx'
import SimilarProperties from './sections/SimilarProperties.jsx'

export default function PropertyDetailPage() {
  const { id } = useParams()
  const property = PROPERTIES.find((p) => p.id === id)

  if (!property) {
    return (
      <>
        <div className="min-h-screen bg-[#FAF8F1] px-5 py-8 text-center md:px-10 md:py-12">
          <h1 className="font-heading text-3xl font-extrabold text-[#063D2E] md:text-5xl">Property not found</h1>
          <p className="mt-4 text-base text-[#66756F] md:text-lg">
            The property you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/properties"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A24A] hover:text-[#063D2E]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <main>
        <PropertyGallery property={property} />
        <PropertyOverview property={property} />
        <PropertySpecifications property={property} />
        <PropertyDescription property={property} />
        <PropertyFeatures property={property} />
        <PropertySuitableFor property={property} />
        <PropertyLocation property={property} />
        {/* <PropertyMedia property={property} /> */}
        <PropertyEnquiry property={property} />
        <SimilarProperties currentId={property.id} />
      </main>
    </>
  )
}
