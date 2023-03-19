import React from "react";
import classes from './ContactContainer.module.css'

interface ContactProps {
  logo: React.ReactNode
  info: string
}

const ContactContainer: React.FC<ContactProps> = ({ logo, info }) => {

  return (
    <div className={classes.ContactContainer}>
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