import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer id='footer'>
        <div>
            <img src={logo} alt="" />
            <h2>Shresth Gupta</h2>
            <p>Developer | Coder | UX/UI Designer</p>
        </div>
        <aside>
            <h2>Social Media</h2>

            <article>
                <a href="https://github.com/Shresth-291?tab=repositories" target='blank'><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/shresth-gupta-7a1749271" target='blank'><AiFillLinkedin /></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer