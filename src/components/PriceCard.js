import React from 'react'
import './PricingCards.css'

import group35 from '../assets/Group35.png'
function PriceCard({place, price, placeformation, isActive}) {
    console.log(isActive)
  return (
    <div className={`company-formation-details ${isActive}`} >
      <h3>{place}</h3>
      <h2>{price} <span className="one-time-payment">One Time Payment</span></h2>
      <p>{placeformation}. New Company formation includes</p>
     <ul>
        <li><img src={group35} alt="tick"/>Attestation Charges</li>
        <li><img src={group35} alt="tick"/>Registered Agents</li>
        <li><img src={group35} alt="tick"/>Registered Office</li>
        <li><img src={group35} alt="tick"/>Varal Administrative</li>
        <li><img src={group35} alt="tick"/>Preparing Statutory File</li>
        <li><img src={group35} alt="tick"/>Liasing with Registration Authorities</li>
        <li><img src={group35} alt="tick"/>De Diligence Appraisal</li>
        <li><img src={group35} alt="tick"/>Keeping The Register</li>
        <li><img src={group35} alt="tick"/>Seal Charges</li>
        <li><img src={group35} alt="tick"/>Certification Of Good Standing</li>
    </ul>
     <button className="btn-continue">Continue</button>
 </div>
  )
}

export default PriceCard
