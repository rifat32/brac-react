import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Products } from '../../Data/HomePageData';
const ProductsSection = () => {
    const A1 = 'assets/img/Arrow-1.png'
    const A4 = 'assets/img/arrow-4@2x.svg'
   
  
    interface ProductObj {
      img : string;
      name : string;
      description : string;
    }
    const [products,setProducts] = useState<(ProductObj[]| null)>(null)
    useEffect(() => {
setProducts([...Products])
    },[])
    return (
        <section id="product" className=" products stretch-left ms-5 bg-light">
        <div className="container  products-heading " data-aos="fade-up">  
          <div className="row">     
            <div className="col-lg-8">
              <h2 className="font1 fs50 custom-font color1 fw300 lh64">products</h2>
            </div>
            <div className="col-lg-4 mt-4 productlink">
              <Link to="/products">
              <a  className="font2 custom-font-2 fs22 color1 fw300 lh45">view all <span>  <i className="bi"> 
                    <img alt="img"  className="arrow-2" src={A1} /> </i></span></a>
              </Link>
             
            </div>
          </div>
        </div>
        <div className="container-fluid padr0" data-aos="fade-up"> 
          <div className="row gy-6 g-0 ">
            {
              products? (products.map((el,index) => (
                <div key={index} className="col-lg-3 mt-5  ">
                <div className="box" data-aos="fade-up" data-aos-delay={100}>             
                  <img alt="img"  src={el.img} className="img-fluid"  />
                  <div className="productinfo">
                    <h3 className="font2 fs22 color1 fw300 lh36 my-3">{el.name}</h3>
                    <p className="font2 fs16 color1 fw300 lh24">{
                      el.description
                    }
                    </p>
                  </div>
                  <div className="text-lg-start arrowset">
                    <span className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <i className="bi">  <img alt="img"  className="arrow-2" src={A4} /> </i>
                    </span>
                  </div>
                </div>
              </div>
              ))) : null
            }
           
          </div>
        </div>
      </section>
    )
}

export default ProductsSection
