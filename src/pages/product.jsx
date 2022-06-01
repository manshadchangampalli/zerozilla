import React, { useEffect, useState } from 'react'
import '../styles/productpage.scss'
import Header from '../components/header/Header'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction, cartItems } from '../redux/action'

const Product = () => {
  const [data, setData] = useState({})
  const [disable, setDisable] = useState(false)
  const { id } = useParams()
  const cartArray = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [id])
  useEffect(() => {
    if (cartArray.includes(id)) {
      setDisable(true)
    }else{
      setDisable(false)
    }
  }, [disable, cartArray, id])

  const addToCartHandler = () => {
    console.log("yes", cartArray);
    console.log(disable);
    if (!disable) {
      dispatch(cartAction(id))
      dispatch(cartItems(data))
    }
  }
  const cart = useSelector(state => state.cartItems)
  console.log(cart);
  return (
    <div className='product-page'>
      <Header />
      <div className="back">
        <Link to={"/"}>
          <p >
            &lt; Back
          </p>
        </Link>
      </div>
      {
        data.image ?
          <>
            <div className="image-wraper">
              <img className='product-img' src={data.image} alt="" />
            </div>
            <div className="product-details">
              <div className="detils-wraper">
                <h1 className='title'>{data.title}</h1>
                <h3 className="product-category">{data.category}</h3>
                <p className="description">
                  {data.description}
                </p>
                {data.rating && <h3 className="rating">rating : {data.rating.rate} <span> review : {data.rating.count}</span></h3>}
                <h2 className="price"> price : ${data.price}</h2>

                <button
                  style={{ opacity: disable ? 0.3 : 1 }}
                  onClick={addToCartHandler}
                  className="add-to-cart">
                  Add To Cart
                </button>
              </div>
            </div>
          </> : <h1 className='loading'>Loading...</h1>
      }
    </div>
  )
}

export default Product