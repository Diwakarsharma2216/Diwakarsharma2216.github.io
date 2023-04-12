import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
import Contact from '../component/Contact'
import Project from '../component/Project'
import Skills from '../component/Skills'
import Navbar from '../component/Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
