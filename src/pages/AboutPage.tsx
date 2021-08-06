
import React from 'react'
import CountSection from '../components/AboutPageComponents/CountSection'
import ExecutiveManagementSection from '../components/AboutPageComponents/ExecutiveManagementSection'
import HeroSection from '../components/AboutPageComponents/HeroSection'
import MissionSection from '../components/AboutPageComponents/MissionSection'
import TeamSection from '../components/AboutPageComponents/TeamSection'
import TechnologySection from '../components/AboutPageComponents/TechnologySection'

const AboutPage = () => {
    return (
        <main id="main">
        <HeroSection/>
        <MissionSection/>
        <CountSection/>
        <TechnologySection/>
        <ExecutiveManagementSection/>
        <TeamSection/>
    </main>
    )
}

export default AboutPage
