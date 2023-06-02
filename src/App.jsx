import './App.css'
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import About from './pages/About'
import DownloadApp from './pages/DownloadApp'
import Testimonials from './pages/Testimonials'

function App() {

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
        <section id="about">
          <About/>
        </section>
        <section id="downloadApp">
          <DownloadApp/>
        </section>
        <section id="testimonials">
          <Testimonials/>
        </section>
       
      </div>
     
    </div>
  )
}

export default App
