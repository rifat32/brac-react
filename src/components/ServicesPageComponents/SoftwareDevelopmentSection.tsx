import React from 'react'
const S2 = 'assets/img/services/service2.png'
const SoftwareDevelopmentSection = () => {
    return (
        <section className="services my-5 ms-5" id="software-development" >
  <div className="container " data-aos="fade-up">  
    <div className="row">
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="box">
          <h2 className="color1 custom-font w-25"> software development</h2>
          <h4 className="color1 custom-font-1 lh36 mt-3 w-100">Robust solutions, scalable &amp; high transaction-proof </h4>
        </div>
      </div>
      <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={100}>
        <img alt="img"  src={S2} className="img-fluid" />
        <div className="box">
          <p className="color1 lh36 my-3" style={{ fontSize:"1.2rem" }}> A company’s ability to rapidly develop and compete in a changing business and technological environment is determined by its technology strategy. The software enables technologies to be resilient and thus, shield them from future shock. 
            We will co-create with you the designs and develop products for every platform, including web and mobile, enterprise, and customer-facing. With BRAC IT, you can also avail cloud management, analytical engine and solution services.
            We do this by bringing to the table a team of  170 developers who expertise in world-class software development, result-driven strategy, and years of experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default SoftwareDevelopmentSection
