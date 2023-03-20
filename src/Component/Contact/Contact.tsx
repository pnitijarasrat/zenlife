import React from "react";
import classes from './Contact.module.css'
import ContactContainer from "./ContactContainer";
import { BsTelephone, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import minimalPicture from './../../asset/contact_picture.webp'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => { Aos.init() }, [])

  return (
    <div className={classes.Contact}>
      <div className={classes.contactContent}>
        <h1 data-aos="fade-right">Contact</h1>
        <ContactContainer logo={<BsTelephone size={30} />} info="080-429-2884" />
        <ContactContainer logo={<FiMail size={30} />} info="puriwatds@gmail.com" />
        <a href="https://www.linkedin.com/in/p-nitijarasrat/" target="_blank" rel="noreferrer">
          <ContactContainer logo={<BsLinkedin size={30} />} info="Puriwat Nitijarasrat" />
        </a>
        <a href="https://www.instagram.com/qwertyadgsfhzxcvb/" target="_blank" rel="noreferrer">
          <ContactContainer logo={<BsInstagram size={30} />} info="qwertyadgsfhzxcvb (19/3/2023)" />
        </a>
      </div>
      <img src={minimalPicture} alt="fuji mountain" data-aos="fade-left" />
    </div>
  )

}

export default Contact