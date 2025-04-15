import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Skill from './pages/Skill';
import Profile from './components/Profile';
import SiteMap from './pages/SiteMap';
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main className="max-w-screen-lg mx-auto px-4 py-8 lg:flex">
        <div className='w-60'>
          <Profile />
        </div>
        <div className="lg:max-w-3xl overflow-auto lg:mt-10 max-lg:mt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;