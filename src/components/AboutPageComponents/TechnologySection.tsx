import React from 'react'
const A1 = 'assets/img/about/image1.png';
const A2 = 'assets/img/about/image2.png';
const A3 = 'assets/img/about/image3.png';

const TechnologySection = () => {
    return (
        <section id="product" className="technology  m-5 px-5 py-4 " style={{ backgroundColor:"#092C58" }}>
  <div className="container" data-aos="fade-up">  
    <div className="row">     
     
        <h2 className="text-center text-light  my-5 display-4 py-3">we follow standard practices</h2>
      
    </div>
  </div>
  <div className="container " data-aos="fade-up"> 
    <div className="row  d-flex justify-content-between">
      <div className="col-lg-4 mt-5 ">
        <div className="box mx-auto" data-aos="fade-up" data-aos-delay={200}>
          <img alt="img"  src={A1} className="img-fluid"  />
        </div>
      </div>
      <div className="col-lg-4   mt-5">
        <div className="box mx-auto" data-aos="fade-up" data-aos-delay={200}>
        <img alt="img"  src={A3} className="img-fluid"  />
        </div>
      </div>
      <div className="col-lg-4  mt-5 ">
        <div className="box mx-auto" data-aos="fade-up" data-aos-delay={200}>
        <img alt="img"  src={A2} className="img-fluid"  />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default TechnologySection
