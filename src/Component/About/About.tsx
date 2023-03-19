import React from "react";
import classes from './About.module.css'
import minimalPicture from '../../asset/about_picture.jpeg'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className={classes.About}>
      <img src={minimalPicture} alt="japanese gray scale" data-aos="fade-right" />
      <div className={classes.aboutContent}>
        <div data-aos="fade-down">
          <h1>Hi, my name is Puriwat</h1>
          <p>
            I'm an undergraduate industrial engineering student from Chulalongkorn University and a minimalism.
            I found myself enjoy building and developing website so that I kept getting good.
          </p>
        </div>
        <Link to='/zenlife/bio'>
          <button data-aos="fade-up">Read More</button>
        </Link>
      </div>
    </div>
  )

}

export default About