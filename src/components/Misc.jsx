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
    <a href="https://linktr.ee/Stupendousshubham?utm_source=linktree_profile_share&ltsid=5426e7f9-0226-47b6-a128-0ad1e94c5642" target="_blank"  rel="noreferrer" className='connectBtn'>
        LET'S CONNECT!
    </a>
    <BsMouse className="scrollBtn" />
    </>
  )
}

export default Misc