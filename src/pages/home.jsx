import React from 'react'
import '../styles/home.scss'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Category from '../components/category/category'

const Home = () => {
  return (
    <div className='home-page'>
        <Header/>
        <Hero/>
        <Category/>
    </div>
  )
}

export default Home