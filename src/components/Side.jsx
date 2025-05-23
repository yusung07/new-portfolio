import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const menuItems = [
    { path: '/', label: '1. 소개' },
    { path: '/skill', label: '2. 기술 스택' },
    { path: '/projects', label: '3. 주요 프로젝트' },
    { path: '/architecture', label: '4. DB 설계 작업물' },
    { path: '/contact', label: '5. 연락처' }
];

export default function SideBar() {
    const location = useLocation();

    return (
        <div className="w-80 border-gray-200 border-r max-lg:hidden">
            <ul>
                {menuItems.map(({ path, label }) => (
                    <li key={path}>
                        <Link 
                            to={path} 
                            className={`block w-full px-4 py-3 cursor-pointer hover:bg-gray-100 ${location.pathname === path ? 'bg-gray-100' : ''}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function MobileSideBar() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* 모바일 햄버거 버튼 */}
            <button 
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-100 rounded-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* 모바일 사이드바 */}
            {isOpen && (
                <div 
                    className="w-full h-full bg-white shadow-lg absolute left-0 top-0 z-40"
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className="mt-16">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    onClick={toggleSidebar}
                                    className={`block w-full px-4 py-3 cursor-pointer hover:bg-gray-100 ${location.pathname === item.path ? 'bg-gray-100' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}