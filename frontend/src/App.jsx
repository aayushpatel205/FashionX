import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import HomePage from '../pages/HomePage'
import CollectionPage from '../pages/CollectionPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import PaymentPage from '../pages/PaymentPage'
import MyOrderPage from '../pages/MyOrderPage'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='/collections' element={<CollectionPage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/my-order' element={<MyOrderPage/>} />
      </Route>
    </Routes>
  )
}

export default App