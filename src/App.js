import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home'
import Episodes from './Pages/Episodes'
import Location from './Pages/Location'

function App() {

  return (
    <BrowserRouter>

      <div className='App'>
        <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/episodes' element={<Episodes/>} />
        <Route path='/location' element={<Location/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
