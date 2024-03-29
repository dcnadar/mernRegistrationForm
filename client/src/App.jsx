import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Landing from './components/Landing'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
