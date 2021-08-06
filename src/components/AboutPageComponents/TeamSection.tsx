import React,{useState,useEffect} from 'react'
import { Managers } from '../../Data/AboutComponentData'


const TeamSection = () => {
  interface ManagersObj  {
    name: string;
    picture: string;
    position: string;
}
  const [managers,setManagers] = useState<(ManagersObj[] | null)>(null)
 useEffect(() => {
  setManagers([...Managers])
 },[])
    return (
        <section className="team m-5 px-5 py-4">
        <div className="container" data-aos="fade-up">       
          <h2 className="color1 custom-font mb-5"> management</h2>
          <div className="row gy-4" id="teamcontent">
            {managers? managers.map((el,index) => (
               <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 teamitem" data-aos="fade-up" data-aos-delay={100}>
               <div className="member">
                 <div className="member-img"> <div className="col-lg-9 col-sm-12">
                     <img alt="img" src={el.picture} className="img-fluid"  />
                    
                   </div>
                 </div>
                 <div className="member-info">
                   <h4 className="color1 my-3">{el.name}</h4>
                   <p className="text-muted" >{el.position}</p>
                 </div>
               </div>
             </div>
            )):null}
          
          </div>
        </div>
      </section>
    )
}

export default TeamSection
