import React, { useEffect, useRef, useState } from 'react'
import './about.css'
import firstImage from '../../Images/firstImage.jpg'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const About = () => {
  let [isacademic, setIsAcademic] = useState(true)
const workRef = useRef(null)
const acadeRef = useRef(null)
const workRefBtn = useRef(null)
const acadeRefBtn = useRef(null)
function experienceHandler() {
  if (isacademic) {
    acadeRef.current.style.display = 'none'
    workRef.current.style.display = 'block'
    workRefBtn.current.style.backgroundColor="#000"
    workRefBtn.current.style.color="#fff"
    acadeRefBtn.current.style.backgroundColor="#fff"
    acadeRefBtn.current.style.color="#000"
    console.log("work", isacademic)
  } else {
    acadeRef.current.style.display = 'block'
    workRef.current.style.display = 'none'
    workRefBtn.current.style.backgroundColor="#fff"
    workRefBtn.current.style.color="#000"
    acadeRefBtn.current.style.backgroundColor="#000"
    acadeRefBtn.current.style.color="#fff"
    console.log("academic ", isacademic)
  }
}
useEffect(() => {
  experienceHandler()
}, [isacademic])

  return (
      <div className="about">
          <div className="aboutSection">
              <div className="a-left">
                  <img src={firstImage} alt="" />
              </div>
              <div className="a-right">
                  <h2>About me</h2> <hr />
                  <p className='aboutText'>With 4 years of experience spanning EdTech as a Mathematics and Physics SME and Quality Analyst,
                      I've transitioned my passion to big data. Eager to contribute, I'm actively pursuing opportunities to apply my diverse
                      skills in a new role.</p>
                  <div className="workandExperience">
                      <div className="w-buttons">
                          <button onClick={() => setIsAcademic(true)} ref={workRefBtn}>Work Experience</button>
                          <button onClick={() => setIsAcademic(false)} ref={acadeRefBtn}>Academic Qualification</button>
                      </div>
                      <div className="workExperience" ref={workRef}>
                      <div className="vertical-w"></div>
                      <div className="circleIcon-a"><FiberManualRecordIcon fontSize="small"/></div>
                      <div className="circleIcon-b"><FiberManualRecordIcon fontSize="small"/></div>
                      <div className="detailscard">
                          <div className="info">
                              <h4>Evelyn Learning System</h4>
                              <p><i>Quality Analyst</i></p>
                              <p>2019-2023</p>
                          </div>

                          <div className="info-b">
                          </div>
                      </div>
                      <div className="detailscard">
                          <div className="info">
                          </div>
                          
                          <div className="info-b">
                              <h4>Acadecraft Private Limited</h4>
                              <p><i>Subject Matter Expert</i></p>
                              <p>2018-2019</p>
                          </div>
                      </div>
                      </div>

                      {/*  */}
                      <div className="academics" ref={acadeRef}>
                      <div className="vertical-a"></div>
                      <div className="circleIcon-aa"><FiberManualRecordIcon fontSize="small"/></div>
                      <div className="circleIcon-ba"><FiberManualRecordIcon fontSize="small"/></div>
                      <div className="circleIcon-ca"><FiberManualRecordIcon fontSize="small"/></div>
                      <div className="circleIcon-da"><FiberManualRecordIcon fontSize="small"/></div>
                      <div className="detailscard">
                          <div className="info">
                              <h4>PG-DBDA</h4>
                              <p><i>CDAC-NOIDA</i></p>
                              <p>2023-2023</p>
                          </div>

                          <div className="info-b">
                          </div>
                      </div>
                      <div className="detailscard">
                          <div className="info">
                          </div>
                          
                          <div className="info-b">
                              <h4>B.Tech</h4>
                              <p>Percentage: <i>77.14</i></p>
                              <p>2014-2018</p>
                          </div>
                      </div>
                      <div className="detailscard">
                          <div className="info">
                          <h4>Intermediate</h4>
                              <p>Percentage: <i>86.4</i></p>
                              <p>2012-2014</p>
                          </div>
                          
                          <div className="info-b">
                              
                          </div>
                      </div>
                      <div className="detailscard">
                          <div className="info">
                          </div>
                          
                          <div className="info-b">
                              <h4>Highschool</h4>
                              <p>Percentage: <i>81.2</i></p>
                              <p>2010-2012</p>
                          </div>
                      </div>
                      </div>
                      {/*  */}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About