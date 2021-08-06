import React from 'react'
import CopyRightsSection from '../components/TermsPageComponents/CopyRightsSection'
import LegalNoticeSection from '../components/TermsPageComponents/LegalNoticeSection'
import PrivacySection from '../components/TermsPageComponents/PrivacySection'
import TermsAndConditionsSection from '../components/TermsPageComponents/TermsAndConditionsSection'

const TermsPAge = () => {
    return (
        <main id="main" className="inner-page">
        <LegalNoticeSection/>
        <TermsAndConditionsSection/>
        <CopyRightsSection/>
        <PrivacySection/>

       </main>
    )
}

export default TermsPAge
