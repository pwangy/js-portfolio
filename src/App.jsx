import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Toolbox } from './components/Toolbox'
import { Contact } from './components/Contact'

function App() {
	return (
    <div className='body'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Toolbox />
      <Contact />
    </div>
)}

export default App