import React from "react";
import NavBar from "./NavBar";
import classes from './Home.module.css'
import Icon from "../UI/Icon";
import xSign from '../../asset/x_sign.png'
import squareSign from '../../asset/square_sign.png'
import triangleSign from '../../asset/triangle_sign.png'
import circleSign from '../../asset/circle_sign.png'
import PP from './../../asset/business_profile_pic.png'
import { SlideIn } from "../AnimationCSS/animation";
import { useState, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const HomePage: React.FC = () => {
  const [showX, setShowX] = useState(false)
  const [showHome, setShowHome] = useState(false)

  useEffect(() => {
    Aos.init()
    const timer = setInterval(() => {
      setShowX(true)
    }, 1000)
    const contentTimer = setInterval(() => {
      setShowHome(true)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(contentTimer)
    }
  }, [])

  return (
    <div className={classes.HomePage}>
      {showHome &&
        <>
          <div className={classes.imageContainer} data-aos="fade-down">
            <img src={PP} alt="profile_picture" />
          </div>
          <div className={classes.homeContent}>
            <NavBar />
            <div data-aos="fade-left">
              <h1>Welcome</h1>
              <p>
                A passionate industrial engineering student with enthusiastic, hard-working, and discipline
                habits seeking to improve his skills in the field of web development.
              </p>
            </div>
          </div>
        </>
      }
      {/* {showX &&
        <>
          <SlideIn className={classes.x1}>
            <Icon src={xSign} alt="x_sign" size={90} />
          </SlideIn>
          <SlideIn className={classes.x2}>
            <Icon src={squareSign} alt="x_sign" size={120} />
          </SlideIn>
          <SlideIn className={classes.x3}>
            <Icon src={triangleSign} alt="x_sign" size={150} />
          </SlideIn>
          <SlideIn className={classes.x4}>
            <Icon src={circleSign} alt="x_sign" size={180} />
          </SlideIn>
        </>} */}
    </div >
  )

}

export default HomePage