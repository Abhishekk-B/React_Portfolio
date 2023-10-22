import React from 'react'
import './projectCard.css'


const ProjectCard = (props) => {
  return (
    <div className="projectCard">
        <img src={props.image} alt="" />
        <h5>{props.name}</h5>
        <a href={props.link} target='_blank'><button>View More</button></a>
    </div>
  )
}

export default ProjectCard