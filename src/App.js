import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import SideBar from './components/Side';
import Header from './components/Header';

import Home from './pages/Home';
import Skill from './pages/Skill';

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
