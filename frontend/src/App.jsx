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
import AboutUsPage from '../pages/AboutUsPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import RewardsPage from '../pages/RewardsPage'
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
        <Route path='/about-us' element={<AboutUsPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path='/rewards' element={<RewardsPage/>} />
      </Route>
    </Routes>
  )
}

export default App