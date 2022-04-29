import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { DarkModeContext } from './DarkModeContext'

function App() {
  const {isActive} = useContext(DarkModeContext)

  return (
    <div className={isActive ? "container dark" : "container light"}>
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='Projetos' element={<Projects />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
