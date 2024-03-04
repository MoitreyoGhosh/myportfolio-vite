import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <header className=" fixed top-0 left-0 w-full flex justify-between items-center z-100 bg-[#191f36] py-8 px-[9%]">
        <a href="#" className=" text-[25px] font-bold text-white cursor-default">Portfolio</a>

        <i className="fa-sharp fa-solid fa-bars" id="menu-icon"></i>

        <nav className="block">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
   </div>
  )
}

export default App
