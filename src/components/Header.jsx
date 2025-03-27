import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="w-full bg-white border-b text-black z-10 lg:hidden">
            <div className="max-w-screen-xl mx-auto py-4 px-4 text-left">
                <h1 className="text-2xl font-extrabold mb-2">강다윤 (Dayoon07)</h1>
                <p className="text-xl">웹 개발자 • 백엔드 개발자 • DB 아키텍트 (DA)</p>
            </div>
        </header>
    );
}
