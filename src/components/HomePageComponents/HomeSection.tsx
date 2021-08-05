import React from 'react'
import HomeSlider from './HomeSlider'

const HomeSection = () => {
  
    return (
        <>
          <HomeSlider/>
          <section className="home d-flex align-items-center">

    <div className="row">
      <div className="col-lg-12 col-md-12 d-flex flex-column text-center">
        <div className="bg-primary-custom py-5 d-flex justify-content-center">
          <h2 className="text-light px-auto w-75" data-aos="fade-up">We pursue purposeful innovation to deliver great user experience. Our mission is to ensure customer happiness through human centered approach, future proof technology and best practices. </h2>
        </div>   
      </div>        
    </div>
 
</section>
        </>
    )
}

export default HomeSection
