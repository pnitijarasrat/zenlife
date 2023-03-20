import React from "react";
import classes from './ProjectContainer.module.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

interface ProjectContainerProp {
  imgSrc: string
  desc: string
  alt: string
  direction: string
}

const ProjectContainer: React.FC<ProjectContainerProp> = ({ imgSrc, desc, alt, direction }) => {
  useEffect(() => { Aos.init() }, [])
  const dataAos = `fade-${direction}`
  console.log(dataAos)

  return (
    <div className={classes.ProjectContainer} data-aos={dataAos} >
      <div className={classes.imgContainer}>
        <img src={imgSrc} alt={alt} height={"300px"} />
      </div>
      <p>{desc}</p>
    </div >
  )

}

export default ProjectContainer