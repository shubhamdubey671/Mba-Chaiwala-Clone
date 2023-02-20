import React from 'react'
import logo from '../assets/logo.png'
import {BsMouse} from 'react-icons/bs'
const Misc = () => {
  return (
    <>
    <div className='cursor' >   </div>
    <a href="/" className='logo' >
        <img src={logo} alt="logo" />
    </a>
    <a href="https://www.linkedin.com/in/shubhamdubey671" target="_blank"  rel="noreferrer" className='connectBtn'>
        LET'S CONNECT!
    </a>
    <BsMouse className="scrollBtn" />
    </>
  )
}

export default Misc