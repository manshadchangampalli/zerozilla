import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { navItems } from '../../redux/action'
import Card from './card/Card'
import './category.scss'

const Category = () => {
  const [category, setCategory] = useState([])
  const [productData, setProductData] = useState([])
  const [tabLoading, setTabLoading] = useState(false)
  const [catLoading, setcatLoading] = useState(false)
  const [selectItem, setSelectItem] = useState({
    id: 0,
    name: "",
  })

  const nav = useSelector(state => state.navItems)
  const dispatch = useDispatch()
  const fetchProducts = () => {
    console.log("entered");
    setcatLoading(true)
    fetch(`https://fakestoreapi.com/products/category/${selectItem.name}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
        setcatLoading(false)
      })
  }
  useEffect(() => {
    if (nav.length > 0) {
      setSelectItem({ id: 0, name: nav[0] })
      setCategory(nav)
      return
    } else {
      setTabLoading(true)
      fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => {
          setSelectItem({ id: 0, name: data[0] })
          setCategory(data)
          dispatch(navItems(data))
          setTabLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [selectItem])
  return (
    <div className="category">
      <div className="header-wraper">
        <ul className="headers">
          {
            !tabLoading ?
              category.map((data, i) => (
                <li
                  style={{ color: i === selectItem.id ? "white" : "", background: i === selectItem.id ? "black" : "" }}
                  onClick={() => setSelectItem({ id: i, name: data })}
                  key={i}>
                  {data}
                </li>
              )) : <p className='loading'>loading...</p>
          }
        </ul>
      </div>
      <div className="category-body">
        {
          !catLoading ?
            productData?.map((data, i) => {
              return (
                <Link key={i} to={`product/${data.id}`}>
                  <Card data={data} />
                </Link>
              )
            }) :
            <p className='loading'>Loading...</p>
        }
      </div>
    </div>
  )
}

export default Category