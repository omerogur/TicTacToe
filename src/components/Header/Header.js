import React from 'react'
import  '../Header/header.css'
const Header = ({winner}) => {
  return (
    <div>
              <div className='header'>GAME TİME <span className='won'>{winner} KAZANDI</span></div>
    </div>
  )
}

export default Header
