import React from 'react'
import ClientSection from '../components/HomePageComponents/ClientSection'
import ExpretiseSection from '../components/HomePageComponents/ExpretiseSection'
import HomeSection from '../components/HomePageComponents/HomeSection'
import HomeWorkSection from '../components/HomePageComponents/HomeWorkSection'
import ListenSection from '../components/HomePageComponents/ListenSection'
import ProductsSection from '../components/HomePageComponents/ProductsSection'
import ServiceSection from '../components/HomePageComponents/ServiceSection'

const HomePage:React.FC = () => {
    return (
        <main id="main">

  <HomeSection/>
  <ServiceSection/>
  <ExpretiseSection/>
  <ProductsSection/>
  <ClientSection/>
  <ListenSection/>
  <HomeWorkSection/>

  


</main>
    )
}

export default  HomePage
