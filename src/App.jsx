import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Qualification from './Components/Qualification/Qualification';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Qualification/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
