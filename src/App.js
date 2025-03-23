import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SideBar from './components/Side';
import Header from './components/Header';

import Home from './pages/Home';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import { VideoProject, BlogProject, KmcreativeschoolProject } from './pages/Projects';
import Architecture from './pages/Architecture';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename='/react-popol'>
      <div className="flex">
        <SideBar />
        <div className="fixed top-0 lg:left-80 lg:flex">
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/skill" element={ <Skill /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path='/project/video' element={ <VideoProject /> } />
            <Route path='/project/blog' element={ <BlogProject /> } />
            <Route path='/project/kmcreativeschool' element={ <KmcreativeschoolProject /> } />
            <Route path='/architecture' element={ <Architecture /> } />
            <Route path='/contact' element={ <Contact /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
