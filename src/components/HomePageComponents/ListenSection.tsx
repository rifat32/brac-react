import React from 'react'
import  { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// Import Swiper styles


const ListenSection = () => {
    const I1 = 'assets/img/items/1.png'
const I2 = 'assets/img/items/2.png'
const I4 = 'assets/img/items/4.png'
const I5 = 'assets/img/items/5.png'
const I6 = 'assets/img/items/6.png'
    return (
        <section id="listen" className="listen stretch-left ms-5   py-5 bg-primary-custom">
        <div className="container-fluid padr0" data-aos="fade-up" data-aos-delay={200}>
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 offset-lg-4 offset-md-6 my-5 py-5" data-aos="fade-up" data-aos-delay={200}>
              <h2 style={{ fontSize:"2rem" }} className="font2 fs50 .custom-font color3 fw300 lh64">listen, learn and co-create</h2>
              <h3 style={{ fontSize:"1.5rem" }} className="font2 fs22 .custom-font-1 color3 fw300 lh36">Our cultural belief is fundamentally to listen, learn and co-create to unleash full potential. We believe that we need to be endlessly curious and open to new ideas in order to achieve mastery. </h3>
            </div>
          </div>  
        </div> 
        <div className="row container-fluid padr0 nopad mb-5">
          <div className="col-lg-12 grid-margin " data-aos="fade-up" data-aos-delay={300}>
          <Swiper   className="mySwiper"  spaceBetween={50}
            slidesPerView={3} navigation 
            pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
            >
          <SwiperSlide  >
          <div className="item"> <img alt="img"  src={I1}   className="img-fluid"  /> </div>
          </SwiperSlide>
          <SwiperSlide  >
          <div className="item"> <img alt="img"  src={I2}   className="img-fluid"  /> </div>
          </SwiperSlide>
          <SwiperSlide  >
          <div className="item"> <img alt="img"  src={I4}   className="img-fluid"  /> </div>
         </SwiperSlide>
         <SwiperSlide  >
         <div className="item"><img alt="img"  src={I5}   className="img-fluid"  /></div>
         </SwiperSlide>
      
         <SwiperSlide  >
         <div className="item"> <img alt="img"  src={I6}   className="img-fluid"  /> </div> 
         </SwiperSlide>
      
          
           
             
             
                  
          </Swiper>
                                
            
          </div>
        </div>
      </section>
    )
}

export default ListenSection
