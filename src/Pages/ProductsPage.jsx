import React from 'react'
import { NavBar } from '../components/homepage/NavBar'
import { OrderComponent } from '../components/productpage/OrderComponent'

export const ProductsPage = () => {
  return (
    <div>
        <NavBar />
        <OrderComponent />
    </div>
  )
}
