import "./projectList.css";
import Project from "../project/Project"
import {project}  from "../../data";



import React from 'react'

const ProjectList = () => {
  return (
    <div className="pl" id="project">
        <div className="pl-texts">
        <div className="pl-title">
                My Projects
            </div>
        </div>
      <div className="pl-bg"></div>
        <div className="pl-list">
            {project.map((item)=>(
              <Project key={item.id} img={item.img} link={item.link}/>
              ))}
        </div>
    </div>
  )
}

export default ProjectList;