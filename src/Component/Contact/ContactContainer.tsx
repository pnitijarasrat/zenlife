import React from "react";
import classes from './ContactContainer.module.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

interface ContactProps {
  logo: React.ReactNode
  info: string
}

const ContactContainer: React.FC<ContactProps> = ({ logo, info }) => {
  useEffect(() => { Aos.init() }, [])

  return (
    <div className={classes.ContactContainer} data-aos="fade-up">
      <div>
        {logo}
      </div>
      <p>
        {info}
      </p>
    </div>
  )

}

export default ContactContainer