import React from 'react'

const ClientSection = () => {
    const  Client1 = 'assets/img/clients/1.png';
const  Client2 = 'assets/img/clients/2.png';
const  Client3 = 'assets/img/clients/3.png';
const  Client4 = 'assets/img/clients/4.png';
const  Client5 = 'assets/img/clients/5.png';
const  Client6 = 'assets/img/clients/6.png';
const  Client7 = 'assets/img/clients/7.png';
const  Client8 = 'assets/img/clients/8.png';
const  Client9 = 'assets/img/clients/9.png';
const Client10 = 'assets/img/clients/10.png';
const Client11 = 'assets/img/clients/11.png';
const Client12 = 'assets/img/clients/12.png';
    return (
        <section id="clients" className="clients ms-5 my-5">
        <div className="container " data-aos="fade-up">  
          <div className="row">     
            <div className="col-lg-12 ">
              <h2 className="font2 custom-font fs50 color1 fw300 lh64">clients</h2>
            </div>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-12">
              <div className="client-wrapper align-items-center row" data-aos="fade-up" data-aos-delay={200}>
                <div className="client-item col-3">
                  <img alt="img" src={Client1} className="img-fluid"   />
                  </div>
                <div className="client-item col-3">
                <img alt="img" src={Client2} className="img-fluid"    />
                </div>
                <div className="client-item col-3">
                <img alt="img" src={Client3} className="img-fluid"    />
                  </div>
                <div className="client-item col-3">  <img alt="img" src={Client4} className="img-fluid"    /></div>
                <div className="client-item col-3">  <img alt="img" src={Client5} className="img-fluid"    /></div>
                <div className="client-item col-3">   <img alt="img" src={Client6} className="img-fluid"    /></div>
                <div className="client-item col-3">   <img alt="img" src={Client7} className="img-fluid"   /></div>
                <div className="client-item col-3">   <img alt="img" src={Client8} className="img-fluid"     /></div>
                <div className="client-item col-3">   <img alt="img" src={Client9} className="img-fluid"     /></div>
                <div className="client-item col-3">   <img alt="img" src={Client10} className="img-fluid"     /></div>
                <div className="client-item col-3">   <img alt="img" src={Client11} className="img-fluid"     /></div>
                <div className="client-item col-3">   <img alt="img" src={Client12} className="img-fluid"     /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ClientSection
