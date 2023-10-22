import './App.css'
import Navbar from './Components/NavbarComp/Navbar'
import Intro from './Components/IntroSection/Intro'
import About from './Components/AboutSection/About'
import Contact from './Components/ContactSection/Contact'
import Footer from './Components/Footer/Footer'
import Project from './Components/ProjectSection/Project'

function App() {
  console.log(process.env.REACT_APP_SECRET_KEY)

  return (
    <>
      <Navbar/>
      <section id='intro'><Intro/></section>
      <section id='about'><About/></section>
      <section id='projects'><Project/></section>
      <section id='contact'><Contact/></section>
      <section id='footer'><Footer/></section>
    </>
  )
}

export default App
