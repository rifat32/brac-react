import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'

const MainFooter = () => {
    const footerLogo = 'assets/img/logofooter.svg'
    const scrollTop = ():void => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    return (
        <footer id="footer" className="footer ms-5">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-4 footer-info" data-aos="fade-up" data-aos-delay={200}>
                <Link to="/" >
                <a  className="logo d-flex align-items-center">
                  <img alt="img" src={footerLogo}  />
                </a>  
                </Link>
               
                <div className="copyright text-light my-5" data-aos="fade-up" data-aos-delay={300}>
                  © 2021 BRAC IT. All rights reserved. 
                </div>
                <div className="footer-links" data-aos="fade-up" data-aos-delay={200}>            
                  <ul className="termlink mt-2">
                    <li>
                    <Link to="/terms-conditions">
                    <a onClick={scrollTop} className="text-light">Terms and Conditions</a>
                    </Link>
                       </li>  
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 footer-contact" data-aos="fade-up" data-aos-delay={200}>
                <h4 className="text-light">headquarter</h4>
                <p className="mt-3 text-light">
                  BRAC IT <br />Homaira Bhaban<br /> House 115, Road 5 <br />Block B, Niketan, Gulshan 1<br /> Dhaka 1212, Bangladesh
                  <br /><br />
                  <span data-aos="fade-up" data-aos-delay={300}>+8802-8836332<br /> +8809606999654</span> <br /><br />
                  <span data-aos="fade-up" data-aos-delay={400}>info@bracits.com</span> <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-4 footer-links" data-aos="fade-up" data-aos-delay={200}>
                <h4 className="text-light">website</h4>
                <ul style={{ listStyleType: "none" }} className="mt-3" data-aos="fade-up" data-aos-delay={300}>
                  <li className="my-1" > 
                    <Link to="/#">
                    <a onClick={scrollTop}  className="text-light">home</a>
                    </Link>
                    </li > 
                    <li className="my-1"> 
                    <Link to="/services#">
                    <a onClick={scrollTop}  className="text-light">services</a>
                    </Link>
                    </li> 
                    <li className="my-1"> 
                    <Link to="/products#">
                    <a onClick={scrollTop} className="text-light">products</a>
                    </Link>
                    </li> 
                    <li className="my-1"> 
                    <Link to="/about#">
                    <a onClick={scrollTop} className="text-light">about</a>
                    </Link>
                    </li> 
                    <li className="my-1"> 
                    <Link to="/contact#">
                    <a onClick={scrollTop} className="text-light">contact</a>
                    </Link>
                    </li> 
                </ul>
              </div>
              <div className="col-lg-2 col-md-4  footer-contact  text-md-start" data-aos="fade-up" data-aos-delay={200}>
                <h4 className="text-light">social</h4>
                <div className="social-links mt-3">
                  <a  rel="noreferrer" href="https://www.facebook.com/bracitservices/" target="_blank" className="facebook  text-light me-2"><FaFacebook style={{ fontSize:"2rem" }}/></a>
                  <a rel="noreferrer" href="https://www.instagram.com/bracit_/" target="_blank" className="instagram text-light me-2"><FaInstagram style={{ fontSize:"2rem" }} /></a>
                  <a rel="noreferrer" href="https://www.linkedin.com/company/brac-it-services-limited" target="_blank" className="linkedin text-light"><FaLinkedin style={{ fontSize:"2rem" }}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default MainFooter
