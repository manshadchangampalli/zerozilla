import React, { useEffect, useState } from 'react'
import '../styles/productpage.scss'
import Header from '../components/header/Header'
import { useParams } from 'react-router-dom'
import img from '../Assets/img/bg.png'

const Product = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [])
  console.log(data); 

  return (
    <div className='product-page'>
      <Header />
      <img className='product-img' src={img} alt="" />
      <div className="product-details">
        <div className="detils-wraper">
          <h1 className='title'>{data.title}</h1>
          <h3 className="product-category">{data.category}</h3>
          <p className="description">
            {data.description}
          </p>
          <h3 className="rating">rating : {data.rating.rate} <span>{data.rating.count}</span></h3>
          <h2 className="price"> price : {data.price}</h2>
          
          <button  className="add-to-cart">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product