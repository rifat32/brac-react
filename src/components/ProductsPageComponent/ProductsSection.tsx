import React from 'react'

const A4 = 'assets/img/arrow-4@2x.svg'
const P1 = 'assets/img/products/1.png'
const P2 = 'assets/img/products/2.png'
const P3 = 'assets/img/products/3.png'
const P4 = 'assets/img/products/4.png'
const P5 = 'assets/img/products/5.png'
const P6 = 'assets/img/products/6.png'
const ProductsSection = () => {
    return (
        <section id="product" className="products stretch-left m-5 p-5 bg-light">
        <div className="container-fluid  products-heading " data-aos="fade-up">  
          <div className="row">     
            <div className="col-lg-8 ms-5">
              <h2 className="font2 custom-font fs50 color1 fw300 lh64">products</h2>
            </div>
            <div className="col-lg-4 mt-6 productlink">
            </div>
          </div>
        </div>
        <div className="container-fluid padr0 ms-5" data-aos="fade-up"> 
          <div className="row gy-6 g-0 ">
            <div className="col-lg-4 mt-5  ">
              <div className="box" data-aos="fade-up" data-aos-delay={100}>             
                <img alt="img"  src={P1} className="img-fluid"  />
                <div className="productinfo">
                  <h3 style={{ fontSize:"1.5rem" }} className=" my-4 font2  fs22 color1 fw300 lh36">Meeting AtWork</h3>
                  <p style={{ fontSize:"1rem" }} className="font2 fs16 color1 fw300 lh24">A meeting management tool to do meetings more efficiently – invite participants from within the office or outside, share agendas, keep track of the history, assign tasks and also keep track of your to-dos. Be it one-off meetings, recursive or board meetings, this tool has them.
                  </p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mt-5 ">
              <div className="box" data-aos="fade-up" data-aos-delay={200}>
              <img alt="img"  src={P2} className="img-fluid"  />
                <div className="productinfo">
                  <h3 style={{ fontSize:"1.5rem" }} className=" my-4 font2 fs22 color1 fw300 lh36">iMarketplace</h3>
                  <p className="font2 fs16 color1 fw300 lh24">Intelligent and integrated marketplace solution. This supply chain management system can enhance business efficiency and ensure production &amp; supply chain optimization.</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mt-5 ">
              <div className="box" data-aos="fade-up" data-aos-delay={300}>
              <img alt="img"  src={P3} className="img-fluid"  />
                <div className="productinfo">
                  <h3 style={{ fontSize:"1.5rem" }} className=" my-4 font2 fs22 color1 fw300 lh36">Smart PO</h3>
                  <p style={{ fontSize:"1rem" }} className="font2 fs16 color1 fw300 lh24">Easy to use, safe and smart microfinance solution that simplifies the entire process of financial services, monitoring, tracking and evaluation.</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mt-5 ">
              <div className="box" data-aos="fade-up" data-aos-delay={400}>
              <img alt="img"  src={P4} className="img-fluid"  />
                <div className="productinfo">
                  <h3 style={{ fontSize:"1.5rem" }} className=" my-4 font2 fs22 color1 fw300 lh36">iVAT</h3>
                  <p style={{ fontSize:"1rem" }} className="font2 fs16 color1 fw300 lh24">Fully compliant with VAT Act 2012 and approved by the National Board of Revenue (NBR), it offers automated VAT calculation, mushak generation, report generation with dynamic dashboard.</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">   <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mt-5 ">
              <div className="box" data-aos="fade-up" data-aos-delay={100}>
              <img alt="img"  src={P5} className="img-fluid"  />
                <div className="productinfo">
                  <h3 style={{ fontSize:"1.5rem" }} className=" my-4 font2 fs22 color1 fw300 lh36">eRecruitment</h3>
                  <p style={{ fontSize:"1rem" }} className="font2 fs16 color1 fw300 lh24">Bring automation in the whole recruiting process with this simple system. eRecruitment allows management to ensure efficiency in the job recruitment process and employee placement.</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi"> <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mt-5 ">
              <div className="box" data-aos="fade-up" data-aos-delay={200}>
              <img alt="img"  src={P6} className="img-fluid"  />
                <div className="productinfo">
                  <h3 style={{ fontSize:"1.5rem" }} className=" my-4 font2 fs22 color1 fw300 lh36">iAudit</h3>
                  <p style={{ fontSize:"1rem" }} className="font2 fs16 color1 fw300 lh24">Make auditing faster and simpler with more insight and less paperwork with this all-in-one audit management system.</p>
                </div>
                <div className=" text-lg-start arrowset">
                  <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProductsSection
