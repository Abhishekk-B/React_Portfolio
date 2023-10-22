import React from 'react'
import './intro.css'
import firstImage from '../../Images/firstImage.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../../Resume/DigitalResume.pdf'

const Intro = () => {
    const onButtonClick = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "AbhishekResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div className="intro">
        <div className="intro-section">
            <div className="i-left">
                <h2>Hi! I Am</h2>
                <h1>Abhishek Bhardwaj</h1>
                <p>Looking for an opportunity to showcase my skill in the field of Data Analytics, Data Engineer, Data Scientist.</p>
                <button onClick={onButtonClick}>Download CV</button>
                <div className="connect">
            <a href="https://github.com/Abhishekk-B" target='_blank'><span><GitHubIcon fontSize="large"/></span></a>
            <a href="https://www.linkedin.com/in/abhishek-bhardwaj-6ba562154/" target='_blank'><span><LinkedInIcon fontSize="large"/></span></a>
        </div>
            </div>
            <div className="i-right">
                <img src={firstImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Intro