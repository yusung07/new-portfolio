import React from 'react';

function SiteAuthor() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mr-6 mb-4 md:mb-0">
          <img 
            src="/images/profile.png" 
            alt="Profile" 
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Name</h2>
          <p className="text-gray-600 mb-4">Your Title</p>
          <div className="mb-4">
            <p className="mb-1">Affiliation</p>
            <p className="mb-1">Address 1</p>
            <p className="mb-1">Address 2</p>
            <p className="mb-1">City, State ZIP</p>
            <p className="mb-1">Country</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
              Email
            </a>
            <a href="https://twitter.com/yourusername" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
            <a href="https://github.com/yourusername" className="text-blue-600 hover:text-blue-800">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteAuthor;