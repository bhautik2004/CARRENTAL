import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'

const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  const isOwnerPath  = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setshowLogin} />} 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars-details/:id' element={<CarDetails/>} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/bookings' element={<MyBookings/>} />

      </Routes>
    </>
  )
}

export default App
