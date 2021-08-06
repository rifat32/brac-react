import React from 'react'
import ManagedServicedSection from '../components/ServicesPageComponents/ManagedServicedSection'
import RecentblogPostSection from '../components/ServicesPageComponents/RecentblogPostSection'
import ServiceInnerSection from '../components/ServicesPageComponents/ServiceInnerSection'
import SoftwareDevelopmentSection from '../components/ServicesPageComponents/SoftwareDevelopmentSection'
import SolutionDesignSection from '../components/ServicesPageComponents/SolutionDesignSection'

const ServicesPage = () => {
    return (
      <>
      <main id="main" className="inner-page">
        <RecentblogPostSection/>
        <ServiceInnerSection/>
        <SolutionDesignSection/>
        <SoftwareDevelopmentSection/>
        <ManagedServicedSection/>
       
         
          
        </main>
      </>
    )
}

export default ServicesPage

