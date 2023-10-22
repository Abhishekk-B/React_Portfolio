import React, { useEffect, useRef, useState } from 'react'
import './project.css'
import ProjectCard from './ProjectCard'
import BMI from '../../Images/BMIapp.png'
import weather from '../../Images/weatherApp.png'
import guessNumber from '../../Images/GuessNumber.png'
import todoApp from '../../Images/ToDoApp.jpg'
import passwordGenerator from '../../Images/passwordGenerator.jpg'
import backgroundChanger from '../../Images/BackgroundChanger.jpg'
import medicalCost from '../../Images/medicalCost.jpg'
import sentimentAnalysis from '../../Images/sentimentAnalysis.jpg'
import StockMarket from '../../Images/stockMarket.jpg'


const Project = () => {
  const [projectType, setProjectType]=useState("JavaScript")
  const JSProjects=useRef(null)
  const ReactProjects=useRef(null)
  const PythonProjects=useRef(null)
  function ProjectChange(){
    if (projectType==="JavaScript"){
      ReactProjects.current.style.display='none'
      PythonProjects.current.style.display='none'
      JSProjects.current.style.display='flex'
    }else if(projectType==="React"){
      JSProjects.current.style.display='none'
      PythonProjects.current.style.display='none'
      ReactProjects.current.style.display='flex'
    }else{
      ReactProjects.current.style.display='none'
      JSProjects.current.style.display='none'
      PythonProjects.current.style.display='flex'
    }
  }

  useEffect(()=>{
    ProjectChange()
  },[projectType,ProjectChange])

  return (
    <>
    <div className="projectMain">
        <h2>Projects <hr /></h2>
        <div className="projectsButton">
        <button className={projectType==='JavaScript' ? "projectsBtn active" : "projectsBtn"} onClick={()=>{setProjectType("JavaScript")}}>JavaScript</button>
        <button className={projectType==='React' ? "projectsBtn active" : "projectsBtn"} onClick={()=>{setProjectType("React")}}>React</button>
        <button className={projectType==='Python' ? "projectsBtn active" : "projectsBtn"} onClick={()=>{setProjectType("Python")}}>Python</button>
        </div>
        <div className="projectDisplay" ref={JSProjects}>
          <ProjectCard name="BMI Calculator" link="https://github.com/Abhishekk-B/JavaScript_Projects/tree/main/BMI%20Calculator" image={BMI}/>
          <ProjectCard name="Weather App" link="https://github.com/Abhishekk-B/JavaScript_Projects/tree/main/Weather%20App" image={weather}/>
          <ProjectCard name="Guess The Number" link="https://github.com/Abhishekk-B/JavaScript_Projects/tree/main/Guess%20The%20Number" image={guessNumber}/>
        </div>
        <div className="projectDisplay" ref={ReactProjects}>
          <ProjectCard name="To Do App" link="https://github.com/Abhishekk-B/React_Projects/tree/main/ToDoApp" image={todoApp}/>
          <ProjectCard name="Background Changer" link="https://github.com/Abhishekk-B/React_Projects/tree/main/BackgroundChanger" image={backgroundChanger}/>
          <ProjectCard name="Password Generator" link="https://github.com/Abhishekk-B/React_Projects/tree/main/PasswordGenerator" image={passwordGenerator}/>
        </div>
        <div className="projectDisplay" ref={PythonProjects}>
          <ProjectCard name="Medical Cost Prediction" link="https://github.com/Abhishekk-B/Medical_cost_prediction" image={medicalCost}/>
          <ProjectCard name="Sentiment Analysis" link="https://github.com/Abhishekk-B/McDonald_Store_Review_Sentiment_Analysis" image={sentimentAnalysis}/>
          <ProjectCard name="Stock Market Analysis" link="https://github.com/Abhishekk-B/Stock_market_analysis_and_prediction" image={StockMarket}/>
        </div>
    </div>
    </>
  )
}

export default Project