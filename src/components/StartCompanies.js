import React from 'react'
import  './StartCompanies.css'
import illustration from '../assets/ILLUSTRATION.png'
import group117 from '../assets/Group117.png';

function StartCompanies() {
  return (<>
    <div className="container-companies">
      <div className="left-content-side">
        <p className="top-heading">Claim a Free Quote</p>
         <h1 className="heading">Get started on fulfilling
             your Dubai or UAE 
              dream.
          </h1>
          <img src={illustration} className="illustration-img0"  alt="illustration"/>
        <p className="company-site">UAE & Offshore Company</p>
        <p className="description">We provide you with information about UAE or <br />
           Offshore Company Registration & help you<br />
           setup your company with a bank account and<br />
           visas.
        </p>
        <div className="btn-section">
          <button className='company-btn'>Start a Company</button>
          <button className='renew-btn'>Renew a Company</button>
        </div>
      </div>
      <div className="right-img-side">
           <img src={illustration} className="illustration-img"  alt="illustration"/>
      </div>
    </div>
     <div className="video-division">
       <p>Watch the video about UAE or Offshore Company Registration</p>
        <img  src={group117} alt="video"/>
     </div>
    </>
  )
}

export default StartCompanies
