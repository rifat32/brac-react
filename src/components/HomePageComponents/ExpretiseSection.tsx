import React from 'react'

const ExpretiseSection = () => {
const s1 = 'assets/img/s1.png'
const s2 = 'assets/img/s2.png'
const s3 = 'assets/img/s3.png'
const s4 = 'assets/img/s4.png'
    return (
        <section id="values" className="values ms-5">
        <div className="container" data-aos="fade-up">
          <h2 className="font1 custom-font fs50 color1 fw300 lh64">expertise</h2>
          <div className="row mt-5 mb-5">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5 mt-5" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon-box left media p-0 mb-30 d-flex justify-content-space-between"> 
                <a  className="media-left pull-left flip xbox" href="#"><i className="bi"><img style={{ height:"4rem" }} alt="img"  src={s1} className="img-fluid"  /></i></a>
                <div className="media-body mt-2">                 
                  <h4 className="font1 fs22 fw300 lh32 color1">web app <br />developemnt</h4>               
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5 mt-5" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon-box left media p-0 mb-30 d-flex justify-content-space-between"> 
                <a className="media-left pull-left flip xbox" href="#"><i className="bi"><img style={{ height:"4rem" }} alt="img"  src={s2} className="img-fluid"  /></i></a>
                <div className="media-body  mt-2">                 
                  <h4 className="font1 fs22 fw300 lh32 color1">mobile app <br />developemnt</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5 mt-5" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box left media p-0 mb-30 d-flex justify-content-space-between">
                <a className="media-left pull-left flip xbox" href="#"><i className="bi"><img style={{ height:"4rem" }} alt="img"  src={s3} className="img-fluid"  /></i></a>
                <div className="media-body  mt-2">                 
                  <h4 className="font1 fs22 fw300 lh32 color1">user interface &amp; <br />experience design</h4>                 
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5 mt-5" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon-box left media p-0 mb-30 lastpad d-flex justify-content-space-between">
                <a className="media-left pull-left flip xbox" href="#"><i className="bi"><img style={{ height:"4rem" }}  alt="img"  src={s4} className="img-fluid"  /></i></a>
                <div className="media-body  mt-2">                 
                  <h4 className="font1 fs22 fw300 lh32 color1">fintech <br />solution</h4>               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ExpretiseSection
