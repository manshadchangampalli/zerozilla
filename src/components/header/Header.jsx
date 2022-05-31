import React from 'react'
import './header.scss'
import searchimg from '../../Assets/img/search.png'
import cartimg from '../../Assets/img/cart.png'
import avatarimg from '../../Assets/img/avatar.png'

const Header = () => {
  return (
    <div className='header'>
        <h1><u>zerozilla</u></h1>
        <div className="input-box">
            <input type="text" />
            <img src={searchimg} alt="search" />
        </div>
        <div className='nav-items'>
            <div className="cart">
                <img src={cartimg} alt="" />
            </div>
            <img src={avatarimg} alt="" />
        </div>
    </div>
  )
}

export default Header