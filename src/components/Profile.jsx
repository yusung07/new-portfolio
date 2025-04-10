import React from "react";

const projectLinks = [
    {
        name: "학교 정보 검색",
        url: "https://Dayoon07.github.io/school-search",
        note: "(school-search)",
    },
    {
        name: "React 버전 포트폴리오 웹",
        url: "https://dayoon07.github.io/react-popol/",
    },
    {
        name: "모바일 웹 캠 애플리케이션",
        url: "https://dayoon07.github.io/webcam/",
    },
];

export default function Profile() {
    return (
    <div className="w-full">
        <div className="space-y-4">
            <img src="https://dayoon07.github.io/img/증명사진.jpg" alt=" 프로필 사진" className="w-40 rounded-full" />
            <h3 className="text-xl font-semibold">강다윤 <br /> (Dayoon Kang)</h3>

            <div>
                <div className="flex">
                    <img src="https://dayoon07.github.io/static-page-test/img/address-icon.png" />
                    <p>seoul Korea</p>
                </div>
                <div className="flex">
                    <img src="https://dayoon07.github.io/static-page-test/img/school-icon.png" />
                    <p>km hs</p>
                </div>
                <div className="flex">
                    <img src="https://dayoon07.github.io/static-page-test/img/email-icon.png" />
                    <p>seoul Korea</p>
                </div>
                <div className="flex">
                    <img src="https://dayoon07.github.io/static-page-test/img/github-icon.png" />
                    <p>seoul Korea</p>
                </div>
            </div>
            <div className="w-full">
                <h2 className="mt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    간단한 프로젝트
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {projectLinks.map((project, idx) => (
                        <li key={idx}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline">
                                {project.name}
                                {project.note && <br />}
                                {project.note && <span className="pl-6">{project.note}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
}
