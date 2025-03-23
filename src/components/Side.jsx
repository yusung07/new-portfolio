import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return(
        <div className="w-64 bg-gray-100 h-screen p-4">
            <h2 className="text-xl font-bold mb-4">메뉴</h2>
            <ul>
                <li className="mb-2"><Link to="/">홈</Link></li>
                <li className="mb-2"><Link to="/skill">기술 스택</Link></li>
            </ul>
        </div>
    );
}