import React from 'react';

export default function Skill() {
    return (
        <>
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
                        ]
                    },
                    {
                        title: "Languages",
                        color: "bg-emerald-600",
                        items: [
                            "HTML / CSS / JavaScript",
                            "Java / JSP",
                            "Python",
                            "JSON / XML",
                            "SQL"
                        ]
                    },
                    {
                        title: "Frameworks",
                        color: "bg-red-600",
                        items: [
                            "Spring / Spring Boot",
                            "Fast API",
                            "MyBatis / Hibernate",
                            "Tailwind / Bootstrap"
                        ]
                    },
                    {
                        title: "Databases",
                        color: "bg-purple-600",
                        items: [
                            "Oracle",
                            "Maria"
                        ]
                    },
                    {
                        title: "Libraries",
                        color: "bg-orange-600",
                        items: [
                            "jQuery",
                            "Lombok",
                            "JSTL"
                        ]
                    },
                    {
                        title: "Database Tools",
                        color: "bg-yellow-600",
                        items: [
                            "Sql Developer",
                            "Dbeaver"
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
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
