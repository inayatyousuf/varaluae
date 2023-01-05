import React from 'react'
import './Card.css'
function Card({logo,heading, title}) {
  return (
    <div className="card-container">
       <img src={logo} alt="logo"/>
        <h3>{heading}</h3>
       <p>{title}</p>
       <a href="/">Get Started</a>
    </div>
  )
}

export default Card
