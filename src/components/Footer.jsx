import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Your Name</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="hover:text-white">
              GitHub
            </a>
            <a href="https://twitter.com/yourusername" className="hover:text-white">
              Twitter
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


