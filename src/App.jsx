// import {useState, useRef } from 'react'
import styles from './App.module.scss'
// import { Burger } from './components/Navbar/Burger'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
	return (
    <div className={styles.App}>
      <Navbar />
      {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
)}

export default App