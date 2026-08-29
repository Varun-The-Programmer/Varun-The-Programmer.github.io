import styles from './App.module.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Awards } from './components/Awards/Awards'
import { Extracurriculars } from './components/Extracurriculars/Extracurriculars'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Extracurriculars />
      <Awards />
      <Contact />
    </div>
  )
}

export default App