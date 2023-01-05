import React from 'react'
import AdvantageCard from './AdvantageCard'
import './AdvantageCards.css'

import illustration031 from '../assets/ILLUSTRATION031.png';
import group2 from '../assets/Group-2.png'
import group from '../assets/Group.png';
import group1 from '../assets/Group-1.png';
import arrow from '../assets/Vector.png'

import elipse14 from '../assets/Ellipse14.png'
import elipse19 from '../assets/Ellipse19.png'
import elipse15 from '../assets/Ellipse15.png'
function AdvantageCards() {
  return (<>
    <section className="parant-advantage-container">
        <div className="left-advantage-section">
           <div className="advantage-text-card">
               <p>Learn the ways in which you can benefit
                   from a UAE/Off shore Company. Then get
                   started on fulfilling your UAE dream.</p>
                <a href="/">Claim a Free Quote</a>
           </div>
           <AdvantageCard logo={illustration031} heading="Bank Account Setup" title ="There are many banks in the United
            Arab Emirates [UAE] . Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent’s
            strategies and have changed local requirements overnight in the past. But we are here to help you ."
          />
 
           <div className="space-for-ball">
             <img src={elipse14} alt="elipse14" />
           </div>

           <AdvantageCard logo={group2} heading="UAE Company Visas" title ="Your application for visas is critical
            especially if you intend to move to Dubai. This becomes even more urgent if your family will also move
            with you. All the paper work is done on your behalf smoothly so that you may only focus on doing what
            matters most to you."
          />
          
        </div>

        <div  className="right-advantage-section">
        <AdvantageCard logo={group} heading="Advice & Guidance" title ="All activities in te UAE are licensed Whether manufacturing,
           finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is
           a threshold below which business are encouraged. Get our insightful guidance today."
          />
          <div className="space-for-ball-right">
             <img src={elipse19} alt="elipse19" className="first-elipse"/>
             <img src={elipse15} alt="elipse15" className="second-elipse"/>
             
           </div>
          <AdvantageCard logo={group1} heading="Registration Document Perparation" title ="Several documents must be prepared to start the process of registrating a new company in the 
            United Arab Emirated. Be it a Dubai local company, a free zone one or an offshore entity. Your registred agent is dediated to get this done for you for a seamless process."
          />
           <div className="advantage-text-card">
               <p>We have gathered a team of professionals to craft adequate
               services you can rely on for a friction Learn more free setup in UAE..</p>
               <div className="link-arrow-section">
               <a href="/">More about our services </a>
               <img src={arrow} alt="arrow" />
               </div>
           </div>
        </div>
        

    </section>
  </>)
}

export default AdvantageCards
