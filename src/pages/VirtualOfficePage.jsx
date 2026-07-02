import OfficeLocations from '../components/sections/VirtualOffice/OfficeLocations'
import VirtualOfficeEducation from '../components/sections/VirtualOffice/VirtualOfficeEducation'
import AboutVirtualOffice from '../components/sections/VirtualOffice/AboutVirtualOffice'
import VirtualOfficeBenefits from '../components/sections/VirtualOffice/VirtualOfficeBenefits'
import VirtualOfficeFAQ from '../components/sections/VirtualOffice/VirtualOfficeFAQ'
import PricingSection from '../components/sections/VirtualOffice/PricingSection'
import React from 'react'
import CompanyPackageSection from '../components/sections/VirtualOffice/CompanyPackageCard'


export default function VirtualOfficePage() {
  return (
    <div>
        <AboutVirtualOffice />
        <VirtualOfficeEducation />
        <VirtualOfficeBenefits />
      <OfficeLocations />
        <PricingSection />
        <CompanyPackageSection />
        <VirtualOfficeFAQ />
    </div>
  )
}
