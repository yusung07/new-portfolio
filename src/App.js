import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import SideNav from './components/Side';

import Home from './pages/Home';
import Skill from './pages/Skill';

export default function App() {
  return (
    <BrowserRouter basename='https://dayoon07.github.io/react-popol'>
      <>
        <Header />
        <div className="flex">
          <SideNav />
          <div className="flex">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
            </Routes>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}
