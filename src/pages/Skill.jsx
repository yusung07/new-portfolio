import React from 'react';

export default function Skill() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">기술 스택</h1>

            <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        title: "Tools",
                        color: "bg-blue-600",
                        items: [
                            "Eclipse",
                            "Visual Studio Code",
                            "Spring Tool Suite (STS)",
                            "PyCharm"
                        ],
                        links: [
                            "https://dayoon07.github.io/static-page-test/devimg/Eclipse.png",
                            "https://dayoon07.github.io/static-page-test/devimg/VisualStudioCode.png",
                            "https://dayoon07.github.io/static-page-test/devimg/SpringToolSuite.png",
                            "https://dayoon07.github.io/static-page-test/devimg/PyCharm.png"
                        ]
                    },
                    {
                        title: "Languages",
                        color: "bg-emerald-600",
                        items: [
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "Java",
                            "JSP",
                            "Python"
                        ],
                        links: [
                            "https://dayoon07.github.io/static-page-test/devimg/HTML.png",
                            "https://dayoon07.github.io/static-page-test/devimg/CSS.png",
                            "https://dayoon07.github.io/static-page-test/devimg/JavaScript.png",
                            "https://dayoon07.github.io/static-page-test/devimg/Java.png",
                            "https://dayoon07.github.io/static-page-test/devimg/jsp.png",
                            "https://dayoon07.github.io/static-page-test/devimg/python.png",
                        ]
                    },
                    {
                        title: "Frameworks",
                        color: "bg-red-600",
                        items: [
                            "Spring",
                            "Spring Boot",
                            "Fast API",
                            "MyBatis",
                            "Tailwind",
                            "Bootstrap"
                        ],
                        links: [
                            "https://dayoon07.github.io/static-page-test/devimg/Spring.png",
                            "https://dayoon07.github.io/static-page-test/devimg/SpringBoot.png",
                            "https://dayoon07.github.io/static-page-test/devimg/FastAPI.png",
                            "https://dayoon07.github.io/static-page-test/devimg/MyBatis.png",
                            "https://dayoon07.github.io/static-page-test/devimg/tailwindcss.png",
                            "https://dayoon07.github.io/static-page-test/devimg/bootstrap.png"
                        ]
                    },
                    {
                        title: "Databases",
                        color: "bg-purple-600",
                        items: [
                            "Oracle",
                            "Maria"
                        ],
                        links: [
                            "https://dayoon07.github.io/static-page-test/devimg/OracleDB.png",
                            "https://dayoon07.github.io/static-page-test/devimg/MariaDB.png"
                        ]
                    },
                    {
                        title: "Libraries",
                        color: "bg-orange-600",
                        items: [
                            "jQuery",
                            "Lombok",
                            "JSTL"
                        ],
                        links: [
                            "https://dayoon07.github.io/static-page-test/devimg/jQuery.png",
                            "https://dayoon07.github.io/static-page-test/devimg/lombok.png",
                            "https://dayoon07.github.io/static-page-test/devimg/jstl.png"
                        ]
                    },
                    {
                        title: "Database Tools",
                        color: "bg-yellow-600",
                        items: [
                            "Sql Developer",
                            "Dbeaver"
                        ],
                        links: [
                            "https://dayoon07.github.io/static-page-test/devimg/sqldeveloper.png",
                            "https://dayoon07.github.io/static-page-test/devimg/DBeaver.png"
                        ]
                    }
                ].map((section, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                        <div className={`${section.color} text-white px-4 py-3 font-bold text-lg flex items-center`}>
                            {section.title}
                        </div>
                        <ul className="px-6 py-4 space-y-2 text-gray-700">
                            {section.items.map((item, idx) => (
                                <li 
                                    key={idx} 
                                    className="flex items-center text-md hover:text-blue-600 transition-colors"
                                >
                                    {section.links && section.links[idx] && (
                                        <img 
                                            src={section.links[idx]} 
                                            alt={item}
                                            className="w-6 h-6 inline-block"
                                        />
                                    )}
                                    <span className="ml-2 cursor-pointer">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}