import React from "react";
import classes from './Contact.module.css'
import ContactContainer from "./ContactContainer";
import { BsTelephone, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import minimalPicture from './../../asset/contact_picture.webp'

const Contact: React.FC = () => {

  return (
    <div className={classes.Contact}>
      <div className={classes.contactContent}>
        <h1>Contact</h1>
        <ContactContainer logo={<BsTelephone size={30} />} info="080-429-2884" />
        <ContactContainer logo={<FiMail size={30} />} info="puriwatds@gmail.com" />
        <a href="https://www.linkedin.com/in/p-nitijarasrat/" target="_blank" rel="noreferrer">
          <ContactContainer logo={<BsLinkedin size={30} />} info="Puriwat Nitijarasrat" />
        </a>
        <a href="https://www.instagram.com/qwertyadgsfhzxcvb/" target="_blank" rel="noreferrer">
          <ContactContainer logo={<BsInstagram size={30} />} info="qwertyadgsfhzxcvb (19/3/2023)" />
        </a>
      </div>
      <img src={minimalPicture} alt="fuji mountain" />
    </div>
  )

}

export default Contact