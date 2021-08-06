import React from 'react'

const MissionSection = () => {
    return (
        <section className="about ">
        <div className="container">
          <div className="row gy-5 gx-5 mt-0 justify-content-around " style={{ height:"90vh" }}>
            <div  className=" bg-success  col-lg-5 col-xs-10 journy align-items-left" data-aos="fade-up" data-aos-delay={200}>
              <div className="overlap-group1"> 
                <div className="place-1">
                  <h4 className="sawarabimincho-normal-white-28px text-light mx-4 my-4 p-5 h3">what we do</h4>
                </div>
                <div className="text-42"> 
                  <p className="sawarabimincho-normal-white-50px text-light mx-4  px-5 h2 lh45">we unite business challenges, design and engineering </p>
                </div>
              </div>
            </div>
            <div className=" bg-secondary  col-lg-5 col-xs-10 align-items-left" data-aos="fade-up" data-aos-delay={300}>
              <div className="overlap-group2"> 
                <div className="vision">
                  <h4 className="sawarabimincho-normal-white-28px text-light mx-4 my-4 p-5 h3">vision</h4>
                </div>
                <div className="text-44"> 
                  <p className="sawarabimincho-normal-white-50px text-light mx-4  px-5 h2 lh45"> to pursue purposeful innovation that delivers great experience </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default MissionSection
