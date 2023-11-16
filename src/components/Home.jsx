import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/Logo.png'

const Home = ({ratio}) => {

    const animation = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: '-100%',
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }

    const projectCount = useRef(null)

    const animateProjectCount = () => {
        animate(0, 10, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        })
    }

  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animation.h1}>
                    Hi, I'm <br />
                    Shresth Gupta
                </motion.h1>

                <Typewriter options={{
                    strings: ['A Developer', 'A UX/UI Designer', 'A Coder'],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                    wrapperClassName: 'typewriterpara',
                }} />

                <div>
                    <a href="mailto:shresthgupta1atz@gmail.com">Hire Me</a>
                    <a href="#work">
                        Projects
                        <BsArrowUpRight />
                    </a>
                </div>

                <aside>
                    <article>
                        <p>+{ratio<2.1 && (<motion.span whileInView={animateProjectCount} ref={projectCount}>10</motion.span>)}</p>
                        <span>Projects Made.</span>
                    </article>
                    <article data-special>
                        <p>Contact</p>
                        <span>shresthgupta1atz@gmail.com</span>
                    </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="Shresth Gupta" />
        </section>
        <a href="#footer"><BsChevronDown /></a>
    </div>
  )
}

export default Home