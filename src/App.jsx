import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'


function App() {

  return (
    <>
      <Navbar />
      <div className='mt-[80px]'>
        <Header />
      </div>
    </>
  )
}

export default App
