import React from 'react'

const HomeWorkSection = () => {
    const H1 = '/assets/img/homework/1.png'

const H2 = '/assets/img/homework/2.png'

const H3 = '/assets/img/homework/3.png'
    return (
        <section id="homework" className="homework stretch-left ms-5 bg-success ">
        <div className="container padr0" data-aos="fade-up">
          <div className="row g-0 " data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-7 col-md-12 col-sm-12 align-items-center">
              <div className="portfolio-wrap">
                <div className="home-box p-5">
                  <h2>work from home</h2>
                  <h3>The pandemic has placed us in front of harsh reality. While we adore our beautiful office, working from home allows us serious heads-down work time.</h3>
                </div>
              </div>
              <div className="portfolio-wrap">
                <img alt="img"  src={H1} className="img-fluid"  />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="portfolio-wrap">
              <img alt="img"  src={H2} className="img-fluid"  />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="portfolio-wrap">
              <img alt="img"  src={H3} className="img-fluid"  />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="portfolio-wrap">
                <div className="home-box2 p-5">
                  <h3>While we do miss our colleagues and our desks, it has not stopped us from reaching our goals.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HomeWorkSection
