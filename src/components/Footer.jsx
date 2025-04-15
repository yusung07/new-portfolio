import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 border-gray-300 border-t bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="md:mb-0 text-gray-500">
          <Link to="/sitemap" className="font-semibold hover:text-black hover:underline">사이트맵</Link>
          <p className="my-2">
            &copy; {currentYear} dayoon07 All rights reserved. & <a href="https://github.com/academicpages/academicpages.github.io" target="_blank" 
              className="hover:text-black hover:underline">AcademicPages</a>를 React로 리팩토링
            </p>
        </div>
      </div>
    </footer>
  );
}


