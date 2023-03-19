import React from "react";
import classes from './ProjectContainer.module.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface ProjectContainerProp {
  imgSrc: string
  desc: string
  alt: string
}

const ProjectContainer: React.FC<ProjectContainerProp> = ({ imgSrc, desc, alt }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (isInView) {
      console.log('in view')
      setInView(true)
    }
    else setInView(false)
  }, [isInView, inView])

  return (
    <div className={classes.ProjectContainer} ref={ref}>
      <div className={classes.imgContainer}>
        <img src={imgSrc} alt={alt} height={"300px"} />
      </div>
      <p>{desc}</p>
    </div>
  )

}

export default ProjectContainer