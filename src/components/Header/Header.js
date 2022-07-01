import React from 'react'
import  '../Header/header.css'
const Header = ({winner}) => {
  return (
    <div>
              <div className='header'>GAME TİME <span className='won'>{winner && `Player ${winner} WON`} </span></div>
    </div>
  )
}

export default Header
