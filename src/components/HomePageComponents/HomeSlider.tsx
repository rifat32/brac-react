import React,{useState} from 'react';
import './slider.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

 



const HomeSlider:React.FC = () => {
 const [state,setState] = useState({
  
        images: [
            "./assets/img/slide/banner4.png",
            "./assets/img/slide/banner1.png",
            "./assets/img/slide/banner2.png",
            "./assets/img/slide/banner3.png"
          ],
          texts:[
              "we are BRAC IT",
              "co-creating solutions with direct business impact",
              "prioritizing customer happiness",
              "embracing uncertainties through experience and knowledge"
          ],
    
      
        currentIndex: 0,
        translateValue: 0  
 })
 const goToPrevSlide = () => {
    if(state.currentIndex === 0)
      return;
    
    setState(
      {
          ...state,
      currentIndex: state.currentIndex - 1,
      translateValue: state.translateValue + slideWidth()
      }
    )
  }
  const goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(state.currentIndex === state.images.length - 1) {
      return setState({
          ...state,
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    setState({
        ...state,
      currentIndex: state.currentIndex + 1,
      translateValue: state.translateValue + -(slideWidth())
    });
  }
 const  slideWidth = () => {
    return (document.querySelector('.slide') as HTMLInputElement).clientWidth
 }
    
    return (
        <section className="home-slider" >
       
       <div className="slider">

<div className="slider-wrapper"
  style={{
    transform: `translateX(${state.translateValue}px)`,
    transition: 'transform ease-out 0.45s'
  }}>
    {
      state.images.map((image, i) => (
        <Slide key={i} image={image} text={state.texts[i]} />
      ))
    }
</div>

<LeftArrow
 goToPrevSlide={goToPrevSlide}
/>

<RightArrow
 goToNextSlide={goToNextSlide}
/>
</div>
        
        </section>
    )
}
const Slide:React.FC<{key:any,image:string,text:string}> = ({ image,text }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      opacity: 0.7
    }
    return <div className="slide" style={styles}>
        <div style={{ height:"inherit", marginTop:"10rem" }} className="d-flex justify-content-center ">
         <h3 className="text-light ">{text}</h3>
        </div>
        
    </div>
  }
  
  
  const LeftArrow:React.FC<{goToPrevSlide:() => any}> = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <AiOutlineArrowLeft/>
       
      </div>
    );
  }
  
  
  const RightArrow:React.FC<{goToNextSlide:() => any}> = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      
      <AiOutlineArrowRight/>
      </div>
    );
  }
  

export default HomeSlider
