import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Header from './component/Header'
import Foorter from './component/Foorter'
import Cart from './component/Cart'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Foorter />
    </Router>
  )
}

export default App
