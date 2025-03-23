import { Link } from 'react-router-dom';

export default function SideBar() {
    return(
        <div className="fixed top-0 left-0 w-80 h-full border-gray-200 border-r max-lg:hidden">
            <ul>
                <li><Link to="/" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">1. 소개</Link></li>
                <li><Link to="/skill" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">2. 기술 스택</Link></li>
                <li><Link to="/projects" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">3. 주요 프로젝트</Link></li>
                <li><Link to="/project/video" className="block w-full px-8 py-3 cursor-pointer hover:bg-gray-100">3-1. springboot-video-platform</Link></li>
                <li><Link to="/project/blog" className="block w-full px-8 py-3 cursor-pointer hover:bg-gray-100">3-2. springboot-blog</Link></li>
                <li><Link to="/project/kmcreativeschool" className="block w-full px-8 py-3 cursor-pointer hover:bg-gray-100">3-3. kmcreativeschool</Link></li>
                <li><Link to="/architecture" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">4. DB 설계 작업물</Link></li>
                <li><Link to="/contact" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">5. 연락처</Link></li>
            </ul>
        </div>
    );
}