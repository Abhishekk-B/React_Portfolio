import React,{ useState } from 'react'
import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    <>
    <div className="navbar">
        <div className="logo">
            <h2>Abhishek</h2>
        </div>
        <div className={
          isNavExpanded ? "menu expanded" : "menu"
        }>
            <ul>
                <li onClick={() => {setIsNavExpanded(!isNavExpanded);}}><a href="#intro">Home</a></li>
                <li onClick={() => {setIsNavExpanded(!isNavExpanded);}}><a href="#about">About</a></li>
                <li onClick={() => {setIsNavExpanded(!isNavExpanded);}}><a href="#projects">Projects</a></li>
                <li onClick={() => {setIsNavExpanded(!isNavExpanded);}}><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <MenuIcon color="primary"/>
        </button>
    </div>
    </>
  )
}

export default Navbar