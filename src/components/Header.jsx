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
                <Link to='/'></Link>
                <Link to='/'></Link>
                <Link to='/'></Link>
                <Link to='/'></Link>
                <Link to='/'></Link>
            </nav>
        </header>
    );
}