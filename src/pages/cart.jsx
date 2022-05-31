import React from 'react'
import '../styles/cart.scss'
import Header from '../components/header/Header'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const data = useSelector(state => state.cartItems)
  return (
    <div className="cart-page">
      <Header />
      <h1>My Cart</h1>
      <div className="cart-container">
        {
          data.length > 0 ?
            data.map((data, i) => (
              <Link key={i} to={`/product/${data.id}`}>
                <div  className="cart-item">
                  <img src={data.image} alt="" />
                  <div>
                    <div className="cart-details">
                      <h2>{data.title.length > 30 ? `${data.title.slice(0, 30)}...` : data.title}</h2>
                      <h3>categroy: {data.category}</h3>
                      <h3>price: ${data.price}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            )) :
            <h1 className='no-data' >no data</h1>
        }

      </div>
    </div>
  )
}

export default Cart