import React from 'react'
import './Search.css'

import ellipse16 from '../assets/Ellipse16.png'
import ellipse21 from '../assets/Ellipse21.png'
import ellipse8 from '../assets/Ellipse8.png'
import ellipse19 from '../assets/Ellipse19-1.png'

function Search() {
  return (
    <div>
      <div>
          <img src={ellipse16} className="ellipse-img16" alt='ellipse' />
          <img src={ellipse21} className="ellipse-img21" alt='ellipse' />
          <img src={ellipse8} className="ellipse-img8" alt='ellipse' />
          <img src={ellipse19} className="ellipse-img19" alt='ellipse' />
      </div>
      <div className="search-container">
        <input type="search" className="search" name="name" placeholder="Search a Term | Topic" />
      </div>
    </div>
  )
}

export default Search
