import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuOpen, setMenuOpen}) => {
  return (
    <>
        <nav>
            <NavContent />
        </nav>
        <button className='nav-button' onClick={()=>setMenuOpen(!menuOpen)}>
            <AiOutlineMenu />
        </button>
    </>
  )
}

export const HeaderPhone = ({menuOpen, setMenuOpen}) => {
    return (
      <div className={`nav-phone ${menuOpen? 'nav-phone-comes':''}`}>
          <NavContent setMenuOpen={setMenuOpen} />
      </div>
    )
  }

const NavContent = ({setMenuOpen}) => (
    <>
        <h2>Shresth.</h2>
        <div>
            <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a>
            <a href="#timeline" onClick={()=>setMenuOpen(false)}>Experience</a>
            <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
            <a href="#testimonial" onClick={()=>setMenuOpen(false)}>Testimonial</a>
            <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </div>
        <a href="mailto:shresthgupta1atz@gmail.com">
            <button>Email</button>
        </a>
    </>
)

export default Header