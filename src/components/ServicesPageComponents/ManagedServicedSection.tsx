import React from 'react'
const S3 = 'assets/img/services/service3.png'
const ManagedServicedSection = () => {
    return (
        <section id="managed-services"  className="services my-5 ms-5 ">
  <div className="container " data-aos="fade-up">  
    <div className="row">
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="box">
          <h2  className="color1 custom-font w-25"> managed services</h2>
          <h4 className="color1 custom-font-1 lh36 mt-3 w-100">Tailor-made IT support, dependable <br /> &amp; hassle-free </h4>
        </div>
      </div>
      <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-4" data-aos="fade-up" data-aos-delay={100}>
        <img alt="img"  src={S3} className="img-fluid" />
        <div className="box">
          <p className="color1 lh36 my-3" style={{ fontSize:"1.2rem" }}> As the new normal demands better and more efficiency in business, you need a higher level of
            technological agility and robustness to make your business future-proof. 
            We’ll help you manage your IT requirements so you can focus on what your business does best. We will provide expert support and service for your network that justifies your goals and budget. The business benefits of managed services in combination with the money you can save makes managed IT service a smart solution for companies of any size. </p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default ManagedServicedSection
