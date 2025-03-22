import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SideNav from './components/Side';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-2 text-gray-600">사이드바에서 항목을 선택해 주세요.</p>
    </div>
  );
}

function Asd() {
  return (
    <div className="p-6">
      <h1>컴포넌트 만들기 ㅈㄴ 귀찮</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideNav />
        <div className="flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asd" element={<Asd />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}