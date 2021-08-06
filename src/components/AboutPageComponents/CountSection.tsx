import React,{useEffect,useState} from 'react'
import CountUp from 'react-countup';

const CountSection = () => {

 const [showCounter, setShowCounter] = useState<boolean>(false)
   useEffect(() => {

    let isMounted = true;  
    if(isMounted)  {
      let windowHeightPlus,height:any,innerHeight, windowHeight ;
      window.onscroll = function ():void {
       innerHeight = window.innerHeight;
       windowHeightPlus = window.pageYOffset + innerHeight;
       windowHeight = window.pageYOffset 
       height = (document.querySelector('#counts') as HTMLElement)
       if(height) {
        height = height.offsetTop
       }
       
 if((windowHeightPlus < height || ((windowHeight - 50) > height))) {
   setShowCounter(false)
   
 }
 
 else {
   setShowCounter(true)
 }

      
 
   }
    }
    
      
    return (() => { isMounted = false })();
  
 
   },[])
    return (
        <section id="counts" className="counts m-5 px-5 py-4">
        <div className="container" data-aos="fade-up">
          <div className="row ">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className=" color1 custom-font-2">
                
                  {showCounter? (<CountUp    start={0}
  end={250}
  duration={1} />):250} 
                  <span className="psign"> + </span>
                  <p>employees</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className=" color1 custom-font-2">
                
                  {showCounter? (<CountUp    start={0}
  end={160}
  duration={1} />):160} 
                  <span className="psign"> + </span>
                  <p>successful projects</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className=" color1 custom-font-2">
                
                  {showCounter? (<CountUp    start={0}
  end={200}
  duration={1} />):200} 
                  <span className="psign">k + </span>
                  <p>live users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className=" color1 custom-font-2">
                  <span data-purecounter-start={0} data-purecounter-end={20} data-purecounter-duration={1} className="purecounter" />
                  {showCounter? (<CountUp    start={0}
  end={20}
  duration={1} />):20} <span className="psign"> + </span>
                  <p>clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CountSection
