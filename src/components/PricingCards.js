import React from 'react'
import './PricingCards.css'

import elipse7 from '../assets/Ellipse7.png'
import elipse12 from '../assets/Ellipse12.png'
import group100 from '../assets/Group100.png'
import elipse8   from '../assets/Ellipse8.png'
import elipse9   from '../assets/Ellipse9.png'
import PriceCard from './PriceCard'
function PricingCards() {
  return (<>
    <div className="pricing-upper-desc">
      <img src={elipse7} alt="elipse7" />
       <h2 className="pricing-description">Most popular affordable pricing per jurisdictions are brought to you to kick off your adventure.</h2>
      <img src={elipse12} alt="elipse12" />
    </div>

    <div className="pricing-details">
        <PriceCard place="AJMAN OFFSHORE" price="₹2997" placeformation="Ajman Offshore" />
        <PriceCard place="RAK ICC" price="₹2997" placeformation="Rak Icc" isActive ="active-card" />
        <PriceCard place="SHARJAH MEDIA CITY" price="₹4124" placeformation="Sharjah Media City" />

    </div>
    <div className="images-section">
      <img src={elipse8} alt ="elipse8" className="elipse8"/>
      <img src={elipse9} alt ="elipse9" className="elipse9"/>
      <img src={group100} alt="arc" className="arc-right"/>
    </div>
  </>)
}

export default PricingCards
