import { Menu } from "lucide-react";
import React from "react";
import { Link, X } from "react-router-dom";

const menuItems = [
  { to: '/', label: 'Homepage' },
  { to: '/skill', label: 'skill' },
  { to: '/projects', label: 'projects' }
];

export default function Header() {
  return (
    <header className="w-full fixed bg-white border-b">
      <div className="max-w-screen-lg mx-auto p-4 flex max-lg:justify-between">
        <Link to="/" className="p-2 font-semibold">Dayoon Kang</Link>
        <nav className="ml-44 flex space-x-6 max-lg:hidden">
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
        <Link to="/sitemap" className="font-semibold p-2 text-right max-lg:block lg:hidden">사이트맵</Link>
      </div>
    </header>
  );
}
