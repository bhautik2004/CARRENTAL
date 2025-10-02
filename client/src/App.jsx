import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  const isOwnerPath  = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setshowLogin} />} 
    </>
  )
}

export default App
