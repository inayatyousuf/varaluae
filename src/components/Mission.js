import React from 'react'
import './Mission.css'
import group100 from '../assets/Group100.png'
import elipse27 from '../assets/Ellipse27.png'


import dungeon from '../assets/dungeon.png'
import vector1 from '../assets/Vector-1.png'
import vector2 from '../assets/Vector-2.png'
import elipse16 from '../assets/Ellipse16.png'
import elipse24 from '../assets/Ellipse24.png'

import Card from './Card'

function Mission() {
  return (<>
    <div className="mission-container">
       <img src={group100} alt="left-ellipse" className="left-ellipse"/>
       <img src={ elipse27} alt="ellipse27" className="ellipse27"/>
      <div className="mission-content-container">
          <h1 className="top-heading">Dedicated</h1>
        <h1 className="mission-heading">to our mission we are</h1>
         <p className="mission-description">Our services include Company Formation & Renewals,
                   Trust & Fiduciary, Tax Residency Setup With Family, Bank
                   Accounts, Remote Management, Stock Trading
                   Platforms, Ownership Solutions.
        </p>
      </div>
    </div>

    <div class="cards-block">
           <Card logo={dungeon} heading="UAE Free Zone Company" title="Your registration agent , will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE."/>
           <Card logo={vector1} heading="Dubai Local Companies" title="The Dubai LLC formation documents are actualy articles of organization or a certificate of organization. You can get yours today" />
           <Card logo={vector2} heading="OffShore Companies" title="You can register an offshore company and open its bank account in Dubai. Our agents will help you along all the process." />
          
    </div>
    <div className="balls-division">
      <img src={elipse16} alt="elipse16" className="first-ball"/>
      <img src={elipse24} alt="elipse24" className="second-ball"/>
    </div>
    </>
  )
}

export default Mission
