import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SideBar from './components/Side';
import Header from './components/Header';

import Home from './pages/Home';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import { MobileSideBar } from './components/Side';
import Architecture from './pages/Architecture';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="flex min-h-screen">
        <SideBar />
        <MobileSideBar />

        <div className="flex flex-col flex-grow h-screen overflow-hidden">
          <Header />

          <main className="flex-grow overflow-y-auto lg:p-8 max-lg:p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
