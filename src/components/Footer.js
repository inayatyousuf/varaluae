import React from 'react'
import './Footer.css'

import vector4 from '../assets/Vector-4.png'
import vector3 from '../assets/Vector-3.png'
import group34 from '../assets/Group34.png'

import vector5 from '../assets/Vector-5.png'
import vector6 from '../assets/Vector-6.png'
import vector7 from '../assets/Vector-7.png'
import vector8 from '../assets/Vector-8.png'
function Footer() {
  return (<>
    <div className="footer">
      <div className="left-side-footer">
          <div className='left-side-footer-heading'>
              <h3>Read about our blogs for more information on our processes</h3>
          </div>
          <div className="left-side-footer-cards">
              <img src={vector4} alt="vector4"/>
              <div className="left-card-details">
                  <h5>How to start a company formation in Dubai</h5>
                  <p>5 Minutes</p>
              </div> 
          </div>
          <div className="left-side-footer-cards">
          <img src={vector4} alt="vector4"/>
              <div className="left-card-details">
                  <h5>How to start an Offshore company formation in Dubai</h5>
                  <p>5 Minutes</p>
              </div> 
          </div>
          <div className="left-side-footer-cards">
          <img src={vector4} alt="vector4"/>
              <div className="left-card-details">
                  <h5>SEO Dubai: Who benefits the most?</h5>
                  <p>5 Minutes</p>
              </div> 
          </div>
          <div className="left-side-footer-customer-heading">
               <h3>Satisfied we are when our customers are happy</h3>
          </div>
          <div className="left-side-footer-customer-review">
         
         <img src={vector3}  alt="vector3"/>
         <div>
         <p><span className="review-quots">"</span>I am very happy with them . I’ll continue to use their ser v i c es in
         future & highly recommend them to anyone. <span className="review-quots">"</span></p>
         <p className="reviewer-name">Muhib Abrar</p>
         </div>
</div>
          <div className="left-side-footer-customer-review">
               
                   <img src={vector3}  alt="vector3"/>
                   <div>
                   <p><span className="review-quots">"</span>Rama has a high level of integrity ,intellect , know ledge of his
business, resource fulness and, humanity <span className="review-quots">"</span></p>
                   <p className="reviewer-name">Colin Saldahna</p>
                   </div>
          </div>
          <div className="left-side-footer-customer-review">
         
                   <img src={vector3}  alt="vector3"/>
                   <div>
                   <p><span className="review-quots">"</span>Your advise was a so complete that i actally realized how
                    beneficial this would be to my clients and my business. <span className="review-quots">"</span></p>
                   <p className="reviewer-name">Mark Swan</p>
                   </div>
          </div>
         
      </div>

      <div className="right-side-footer">
        <div className='right-side-footer-heading'>
              <h3>Get to know the whole us and more of our services</h3>
        </div>
         <div className="company-details">
         <div className="contact-block">
            <h3>Services</h3>
            <ul>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Solutions</a></li>
                <li><a href='/'>Assurance</a></li>
                <li><a href='/'>FAQ</a></li>
                <li><a href='/'>Working at Varal-Singhania</a></li>
            </ul>
        </div>
        <div className="contact-block">
            <h3>Policies</h3>
            <ul>
                <li><a href='/'>Privacy Policy</a></li>
                <li><a href='/'>Terms & Conditions</a></li>
            </ul>
        </div>
        <div className="contact-block">
            <h3>About</h3>
            <ul>
                <li><a href='/'>About Us</a></li>
                <li><a href='/'>Contact Us</a></li>
                
            </ul>
        </div>
        <div className="address-block">
            <h3>Address</h3>
            <address>
                608 One Lake Plaza, Cluster T, <br />
                Al Sarayat Street, Jumeirah, <br />
                Lake Towers <br />
                Dubai <br />
                United Arab Emirates
                <br /> <br />

                Office Hours: Sunday to <br />
                Thursday 8:30AM to 6:30AM <br/>
                [GMT+4]<br />
                M: +971 55 794 2016 <br />
                O: +971 4 447 1061 <br />

    

            </address>
        </div>

        <div className="subscribe-block">
            <h3>Subscribe Now</h3>
            <p>Subscribe now to recieve our newsletters about amazing opportuinites in Duba.</p>
        </div>
        <div className="newsletter-container">
          <input type="email" name="name" placeholder="Enter Your Email" />
          <img src={group34} alt="email" />
      </div>


       <div className="social-icons">
          <img src={vector5} alt="vector5" />
          <img src={vector6} alt="vector6" />
          <img src={vector7} alt="vector7" />
          <img src={vector8} alt="vector8" />

       </div>
         </div>

      <div className="reserved-rights">
            <p>Varaluae 2021 &copy; All Right Reserved</p>
      </div>
      </div>
    </div>
  </>)
}

export default Footer
