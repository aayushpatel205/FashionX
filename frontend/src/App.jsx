import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import HomePage from '../pages/HomePage'
import CollectionPage from '../pages/CollectionPage'
import ProductPage from '../pages/ProductPage'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='/collections' element={<CollectionPage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
      </Route>
    </Routes>
  )
}

export default App