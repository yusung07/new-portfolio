import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { to: '/', label: 'Homepage' },
  { to: '/a', label: 'test' }
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-screen-xl mx-auto p-2 flex">
        <h1 className="p-2">강다윤</h1>
        <nav className="ml-44 flex space-x-6">
          {menuItems.map((k) => (
            <Link
              key={k.to}
              to={k.to}
              className="py-2 font-semibold relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-black after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {k.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
