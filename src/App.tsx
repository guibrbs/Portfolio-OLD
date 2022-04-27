import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [theme, setTheme] = useState(0)
  return (
    <div className={theme ? "container dark" : "container light"}>
      <div className="wrapper">
        <Home mode={setTheme}/>
      </div>
    </div>
  )
}

export default App
