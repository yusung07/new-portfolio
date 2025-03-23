import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header class="w-full bg-white border-b text-black z-10 lg:hidden">
            <div class="max-w-screen-xl mx-auto py-4 px-4 text-left">
                <div>
                    <h1 class="text-2xl font-extrabold mb-2">강다윤 (Dayoon07)</h1>
                    <p class="text-xl">웹 개발자 • 백엔드 개발자 • DB 아키텍트 (DA)</p>
                </div>
            </div>
            <nav>
                <Link to="/" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">1. 소개</Link>
                <Link to="/skill" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">2. 기술 스택</Link>
                <Link to="/projects" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">3. 주요 프로젝트</Link>
                <Link to="/project/video" className="block w-full px-8 py-3 cursor-pointer hover:bg-gray-100">3-1. springboot-video-platform</Link>
                <Link to="/project/blog" className="block w-full px-8 py-3 cursor-pointer hover:bg-gray-100">3-2. springboot-blog</Link>
                <Link to="/project/kmcreativeschool" className="block w-full px-8 py-3 cursor-pointer hover:bg-gray-100">3-3. kmcreativeschool</Link>
                <Link to="/architecture" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">4. DB 설계 작업물</Link>
                <Link to="/contact" className="block w-full px-4 py-3 cursor-pointer hover:bg-gray-100">5. 연락처</Link>
            </nav>
        </header>
    );
}