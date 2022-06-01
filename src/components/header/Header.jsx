import React, { memo, useEffect, useState } from 'react'
import './header.scss'
import searchimg from '../../Assets/img/search.png'
import cartimg from '../../Assets/img/cart.png'
import avatarimg from '../../Assets/img/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchItem } from '../../redux/action'

const Header = () => {
  const [value, setValue] = useState("")
  const [search, setSearch] = useState(false)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [profile, setProfile] = useState(false)
  const cartArray = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()
  const reduxSearch = useSelector(state=>state.searchItem)
  useEffect(() => {
    if(reduxSearch.length>0){
      setData(reduxSearch)
    } else{
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        dispatch(searchItem(data))
      })
    }
  }, [])
  const searchItem = (e) => {
    setSearch(true)
    setValue(e.target.value)
    const fdata = data.filter((data , i ) => {
      return (data.title.toLowerCase().includes(e.target.value.toLowerCase()) && i<4);
    })
    setFilteredData(fdata);
  }
  
  return (
    <div className='header'>
      <Link to="/">
        <h1><u>zerozilla</u></h1>
      </Link>
      <div className="input-box">
        <input onChange={searchItem} value={value} type="text" />
        <img src={searchimg} alt="search" />
        {
          value.length > 0 && search &&
          <ul
            className="searchItems">
            { 
            data.length>0?
            filteredData.length > 0 ?
              filteredData.map((data, i) => (
                <Link key={i} to={`/product/${data.id}`}>
                  <li onClick={() => setSearch(false)} >{data.title.length > 30 ? `${data.title.slice(0, 30)}...` : data.title}</li>
                </Link>
              )):
              <li>no item</li>
              : <li>loading...</li>
            }
          </ul>
        }
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

export default memo(Header)  