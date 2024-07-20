import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='main'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default App