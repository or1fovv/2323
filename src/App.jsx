import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Adver from './components/Adver'
import Image from './components/Image'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import "./App.css"


const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Showcase/>
        <Adver/>
        <Image/>
        <Benefits/>
      </main>
      <Footer/>
    </>
  )
}

export default App

