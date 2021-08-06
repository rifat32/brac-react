import React,{useState, useEffect} from 'react'

import {Diarectors} from '../../Data/AboutComponentData'



const ExecutiveManagementSection = () => {
  interface ManagersObj  {
    name: string;
    picture: string;
    position: string;
    details: string;
}
  const [managers,setManagers] = useState<(ManagersObj[] | null)>(null)
 useEffect(() => {
  setManagers([...Diarectors])
 },[])
  
    return (
         <section className="team executiveteam m-5 px-5 py-4">
  <div className="container" data-aos="fade-up">
    <h2 className="color1 custom-font mb-5" >board of directors </h2>
    <div className="row gy-4" id="teamcontent">
      {
        managers? managers.map((el,index) => (
          <div key={index} className="col-lg-4 col-md-4  d-flex align-items-stretch mt-5 teamitem" data-aos="fade-up" data-aos-delay={100}>
        <div className="member">
          <div className="member-img">
            <div className="col-lg-9 col-sm-12">
              <img alt="image" src={el.picture} className="img-fluid"  />
            </div>
          </div>
          <div className="member-info">
            <h4 className="color1 my-3" style={{ fontSize:"1rem" }}>{el.name}</h4>
            <p className="text-muted">{el.position}</p>
            <p className="detail color1">{el.details}</p>
          </div>
        </div>
      </div>
        )):
        null
      }
    
    
    
    </div>
  </div>
</section>
    )
}

export default ExecutiveManagementSection
