import React from "react";
import classes from './NavBar.module.css'
import { animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const NavBar: React.FC = () => {
  useEffect(() => { Aos.init() }, [])

  return (
    <nav className={classes.NavBar} data-aos="fade-down">
      <ul>
        <li onClick={() => scroll.scrollTo(0)}>Home</li>
        <li onClick={() => scroll.scrollTo(750)}>About</li>
        <li onClick={() => scroll.scrollTo(1550)}>Project</li>
        <li onClick={() => scroll.scrollToBottom()}>Contact</li>
      </ul>
    </nav>
  )

}

export default NavBar