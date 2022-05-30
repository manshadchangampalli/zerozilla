import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <h1><u>zerozilla</u></h1>
        <div className="input-box">
            <input type="text" />
            <img src="img/search.png" alt="search" />
        </div>
        <div className='nav-items'>
            <div className="cart">
                <img src="img/cart.png" alt="" />
            </div>
            <img src="img/avatar.png" alt="" />
        </div>
    </div>
  )
}

export default Header