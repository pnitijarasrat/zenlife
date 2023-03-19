import React from "react";
import classes from './NavBar.module.css'
import { animateScroll as scroll } from "react-scroll";

const NavBar: React.FC = () => {

  return (
    <nav className={classes.NavBar}>
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