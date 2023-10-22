import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <h2>Copyright reserved @ Abhishek Bhardwaj</h2>
        <div className='connectf'>
        <a href="https://github.com/Abhishekk-B" target='_blank'><span><GitHubIcon fontSize="large"/></span></a>
            <a href="https://www.linkedin.com/in/abhishek-bhardwaj-6ba562154/" target='_blank'><span><LinkedInIcon fontSize="large"/></span></a>
        </div>
    </div>
  )
}

export default Footer