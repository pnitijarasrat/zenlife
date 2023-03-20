import React from "react";
import classes from './Project.module.css'
import ProjectContainer from "./ProjectContainer";
import myLedger from './../../asset/MyLedger.png';
import gameboy from './../../asset/gameboy.png';
import tutorFinder from './../../asset/tutorFinder.png';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const myLedgerContent = {
  imgSrc: myLedger,
  desc: "A ledger app allows you to track your daily transaction and see how you spend via chart.",
  alt: "My Ledger Project Picture",
  direction: "right"
}

const gameboyContent = {
  imgSrc: gameboy,
  desc: "My first portfolio website,in the theme of gameboy, built by pure HTML, CSS, and Javascript.",
  alt: "Gameboy Portfolio Project Picture",
  direction: "left"
}

const tutorFinderContent = {
  imgSrc: tutorFinder,
  desc: "A middleman platform for students and tutors. Built by HTML, CSS, PHP, and SQL",
  alt: "Tutor Finder Project Picture",
  direction: "right"
}

const Project: React.FC = () => {
  useEffect(() => { Aos.init() }, [])

  return (
    <div className={classes.Project}>
      <h1 data-aos="fade-down">Project</h1>
      <div className={classes.projectContent}>
        <ProjectContainer {...myLedgerContent} />
        <ProjectContainer {...gameboyContent} />
        <ProjectContainer {...tutorFinderContent} />
      </div>
    </div>
  )

}

export default Project