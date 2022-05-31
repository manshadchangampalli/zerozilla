import React, { useEffect, useState } from 'react'
import './header.scss'
import searchimg from '../../Assets/img/search.png'
import cartimg from '../../Assets/img/cart.png'
import avatarimg from '../../Assets/img/avatar.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const [search,setSearch] = useState(false)
  const [data, setData] = useState([])
  const [profile, setProfile] = useState(false)
  const cartArray = useSelector(state => state.cartReducer)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [])
  const searchItem = (e) =>{
    if(e.target.value.length > 0){
      setSearch(true)
      let filteredData = data.filter((data,i)=>{
        return data.title.toLowerCase().match(new RegExp(e.target.value, "g"))
      })
      setData(filteredData)
    }
    setSearch(false)
  }

  console.log(data,"data");
  return (
    <div className='header'>
      <Link to="/">
        <h1><u>zerozilla</u></h1>
      </Link>
      <div className="input-box">
        <input onChange={searchItem} type="text" />
        <img src={searchimg} alt="search" />
        {
          search &&
          <ul
          ul className="searchItems">
          {data.length > 0 ?
            data.filter((data, i) => {
              return i < 4
            }).map((data, i) => (
              <Link key={i} to={`/product/${data.id}`}>
                <li onClick={()=>setSearch(false)} >{data.title.length > 30 ? `${data.title.slice(0, 30)}...` : data.title}</li>
              </Link>
            )) :
            <li>loading...</li>
          }
        </ul>}
      </div>
      <div className='nav-items'>
        <Link to={"/cart"}>
          <div className="cart">
            <h2>{cartArray.length}</h2>
            <img src={cartimg} alt="" />
          </div>
        </Link>
        <div onClick={() => setProfile(!profile)} className="profile-icon">
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