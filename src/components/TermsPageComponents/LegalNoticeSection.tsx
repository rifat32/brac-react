import React from 'react'
const bottomline = 'assets/img/bottomline.svg'

const LegalNoticeSection = () => {
    return (
        <section className="termscondition m-5 px-5 py-4" id="terms-condition">
        <div className="container" data-aos="fade-up"> 
          <div className="row mt-5 ">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 mb-5" data-aos="fade-up" data-aos-delay={100}>            
              <h2  className="font1 display-4 fw300 fs50 color1 lh64 mb-4 mt-0"> terms and conditions</h2>
              <img alt="img"  src={bottomline} />
            </div>          
          </div>
        </div>
        <div className="container" data-aos="fade-up"> 
          <div className="row ">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 " data-aos="fade-up" data-aos-delay={100}>
              <h3 className="font1 fs28 fw300 color1 lh34 mb-4">Impressum &amp; legal notice </h3>
              <p className="font1 fs14 fw300 color1 lh22"> Registered address: BRAC Centre, 75 Mohakhali, Dhaka-1212, Bangladesh<br />
                Company reg.: C-39548/2000<br />
                Trade License number: 0341788; <br />
                Tax ID: 676913110958; <br />
                BIN/VAT no:  001947162-0101; <br />
                BASIS membership number: G568</p>
            </div>          
          </div>
        </div>
      </section>
    )
}

export default LegalNoticeSection
