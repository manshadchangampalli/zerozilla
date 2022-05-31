import React, { useState } from 'react'
import './header.scss'
import searchimg from '../../Assets/img/search.png'
import cartimg from '../../Assets/img/cart.png'
import avatarimg from '../../Assets/img/avatar.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const [profile, setProfile] = useState(false)
  const cartArray = useSelector(state => state.cartReducer)
  return (
    <div className='header'>
      <Link to="/">
        <h1><u>zerozilla</u></h1>
      </Link>
      <div className="input-box">
        <input type="text" />
        <img src={searchimg} alt="search" />
      </div>
      <div className='nav-items'>
        <Link to={"/cart"}>
          <div className="cart">
            <h2>{cartArray.length}</h2>
            <img src={cartimg} alt="" />
          </div>
        </Link>
        <div onClick={()=>setProfile(!profile)} className="profile-icon">
          <img src={avatarimg} alt="" />
          {
            profile ? <ul className="itembar">
              <Link to="/myprofile">
              <li>my profile</li>
              </Link>
            </ul> : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Header