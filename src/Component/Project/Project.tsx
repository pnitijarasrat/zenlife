import React from "react";
import classes from './Project.module.css'
import ProjectContainer from "./ProjectContainer";
import myLedger from './../../asset/MyLedger.png';
import gameboy from './../../asset/gameboy.png';
import tutorFinder from './../../asset/tutorFinder.png';


const myLedgerContent = {
  imgSrc: myLedger,
  desc: "A ledger app allows you to track your daily transaction and see how you spend via chart.",
  alt: "My Ledger Project Picture"
}

const gameboyContent = {
  imgSrc: gameboy,
  desc: "My first portfolio website,in the theme of gameboy, built by pure HTML, CSS, and Javascript.",
  alt: "Gameboy Portfolio Project Picture"
}

const tutorFinderContent = {
  imgSrc: tutorFinder,
  desc: "A middleman platform for students and tutors. Built by HTML, CSS, PHP, and SQL",
  alt: "Tutor Finder Project Picture"
}

const Project: React.FC = () => {

  return (
    <div className={classes.Project}>
      <h1>Project</h1>
      <div className={classes.projectContent}>
        <ProjectContainer {...myLedgerContent} />
        <ProjectContainer {...gameboyContent} />
        <ProjectContainer {...tutorFinderContent} />
      </div>
    </div>
  )

}

export default Project