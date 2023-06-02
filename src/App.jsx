import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurServices from './pages/OurServices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="container">
        <Navbar />
        <section id="home">
          <Home/>
        </section>
        <section id="findDoctor">
          <OurServices/>
        </section>
       
      </div>
     
    </div>
  )
}

export default App
