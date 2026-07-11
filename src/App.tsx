import Nav from './components/Nav'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Nav />
      <div className="wrap">
        <Hero />
        <Terminal />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
