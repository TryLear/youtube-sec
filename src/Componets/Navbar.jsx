import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import menu_icon from '../assest/LrBLM4VWPV2BgAAAAAAAAjzBTJWWKlXfdGjAAAAAElFTkSuQmCC.png'
import logo from '../assest/wBi6Iyp7BJP2wAAAABJRU5ErkJggg==.png'
import serach_icon from '../assest/AL9QMzTAxW9iAAAAAElFTkSuQmCC.png'
import upload_icon from '../assest/haZPHZ4gk+Jfv9glgbF7fctup7IqHKs8SsSZCzBH57UuKDAgM2dvuB5VkVwCy7DlQ37+gWrTcODuWflHO7N93ZYs1+bI6dfKvOdTxn0TgJbnNjsudou3j8QXv4DG+J0rc608kT4LMEbnAuXFN8jaN2oIXqijngiJyNigiZ4MicjZAVlPfvRryATQOIOHTqX2dJEqj7v4XeCgoKCgoKCgoK.png'
import more_icon from '../assest/0f+AaD8MOMpuxctAAAAAElFTkSuQmCC.png'
import notifiction_icon from '../assest/kP4AzDMPdFZpm9PAAAAAElFTkSuQmCC.png'
import profile_icon from '../assest/2Q== (4).jpg'

function Navbar({setSidebar}) {
  return (
   <nav className='flex-nav'>
    <div className="nav-left">
      <img className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
    <Link to='/'><img className='logo' src={logo} alt="" /></Link>  
    </div>
    <div className="nav-middle">
      <div className="search-box">
      <input type="text" placeholder='Search' />
      <img src={serach_icon} alt="" />

      </div>
      
    </div>
    <div className="nav-right">
      <img src={upload_icon} alt="" />
      <img src={more_icon} alt="" />
      <img src={notifiction_icon} alt="" />
      <img className='user-icon' src={profile_icon} alt="" />
    </div>

   </nav>
  )
}

export default Navbar