import React from 'react';
import {Link} from 'react-router-dom';

const ServiceSection = () => {
    const A4 = 'assets/img/arrow-4@2x.svg'
const S1 = 'assets/img/services/1.png'
const S2 = 'assets/img/services/2.png'
const S3 = 'assets/img/services/3.png'
    return (
        <section className="homeservices my-5 ms-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-7 col-md-8 col-xs-12 mb-4 d-flex flex-column justify-content-left" data-aos="fade-up" data-aos-delay={100}>
              <h2 className=" w-75 font1  fs50 color1 custom-font lh64 mb-3 mt-5">end to end solution through system integration</h2>
              <p style={{fontSize:"1.5rem"}} className="font1 fw300    color1 lh36 mt-2">We unite business challenges, design and engineering to develop solutions and improve human experience that matters.</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 col-xs-12 service-item align-items-left" data-aos="fade-up" data-aos-delay={200}>
              <Link to="/services#solution-design">
              <a className="prodet" >
                <div className="zoomin frame">
                  <img alt="img"  src={S1} className="img-fluid"  />
                </div>
                <div className="serviceiinfo mt-4"> 
                  <h4 className="font1 fs22 color1 fw300 lh36">solution design</h4>
                  <p className="font1 fs16 color1 fw300 lh24">Catering need through business impact</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </a>
              </Link>
             
            </div>
            <div className="col-md-4 col-xs-12 service-item align-items-left" data-aos="fade-up" data-aos-delay={300}>
              <Link to="services#software-development">
              <a className="prodet" >
                <div className="zoomin frame">
                <img alt="img"  src={S2} className="img-fluid"  />
                </div>                
                <div className="serviceiinfo mt-4">
                  <h4 className="font1 fs22 color1 fw300 lh36">software development</h4>
                  <p className="font1 fs16 color1 fw300 lh24">Robust solutions, scalable &amp; high transaction-proof</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /></i>
                  </span>
                </div>
              </a>
              </Link>
             
            </div>
            <div className="col-md-4 col-xs-12 service-item align-items-left" data-aos="fade-up" data-aos-delay={400}>
              <Link to="services#managed-services">
              <a className="prodet" >
                <div className="zoomin frame">
                <img alt="img"  src={S3} className="img-fluid"  />
                </div>
                <div className="serviceiinfo mt-4">
                  <h4 className="font1 fs22 color1 fw300 lh36">managed services</h4>
                  <p className="font1 fs16 color1 fw300 lh24">Tailor-made IT support, dependable &amp; hassle-free</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </a>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    )
}

export default ServiceSection
