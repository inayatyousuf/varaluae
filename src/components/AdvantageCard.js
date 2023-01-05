import React from 'react'
// css for this file is written parent component css file which AdvantageCards.css
import './AdvantageCards.css'
import arrow from '../assets/Vector.png'
function AdvantageCard({logo, heading, title}) {
  return (
      <div className="advantage-container">

      
      <div className="group-advantage-card">
        <img src={logo} alt="logo" />
        <h4 className="advantage-card-h4">{heading}</h4>
        <p className="advantage-card-p">{title}</p>
        <div className="link-arrow-section">
          <a href="/">Learn More </a>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default AdvantageCard
