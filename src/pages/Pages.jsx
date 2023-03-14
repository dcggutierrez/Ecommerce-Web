import React from 'react'
import Home from '../components/mainpage/Home'
import FlashDeals from '../components/flashdeals/FlashDeals'
import TopCate from '../components/top/TopCate'

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <div>
        <Home cartItem = {cartItem}/>
        <FlashDeals productItems = {productItems} addToCart = {addToCart}/>
        <TopCate/>
    </div>
  )
}

export default Pages