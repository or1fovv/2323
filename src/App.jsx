import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Adver from './components/Adver'
import Image from './components/Image'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Button from './components/Button'
import "./App.css"

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Showcase/>
        <Contact/>
        <Adver/>
        <Image/>
        <Benefits/>
      </main>
      <Footer/>

    </>
  )
}

export default App

