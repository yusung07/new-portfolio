import React from "react";

export default function Profile() {
    // const projectLinks = [
    //     {
    //         name: "학교 정보 검색",
    //         url: "https://Dayoon07.github.io/school-search",
    //         note: "(school-search)",
    //     },
    //     {
    //         name: "React 버전 포트폴리오 웹",
    //         url: "https://dayoon07.github.io/react-popol/",
    //     },
    //     {
    //         name: "모바일 웹 캠 애플리케이션",
    //         url: "https://dayoon07.github.io/webcam/",
    //     },
    // ];

    return (
        <div className="w-full fixed top-20">
            <div className="space-y-4">
                <div className="max-lg:flex max-lg:mb-6">
                    <img src="https://dayoon07.github.io/img/증명사진.jpg" alt="프로필 사진" className="max-lg:w-10 lg:w-40 rounded-full" />
                    <div className="max-lg:w-full lg:text-xl max-lg:text-lg font-semibold max-lg:ml-3 my-2">강다윤</div>
                </div>

                <div className="space-y-2 max-lg:hidden">
                    <div className="flex items-center space-x-2">
                        <AddressIcon />
                        <p>경기도 안양시</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <SchoolIcon />
                        <p>근명고등학교</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <EmailIcon />
                        <a href="mailto:gangd0642@gmail.com" className="hover:underline">gangd0642@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <GitHubIcon />
                        <a href="https://github.com/dayoon07" className="hover:underline">dayoon07</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AddressIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
    );
}

function SchoolIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16c1.11 0 1.99-.89 1.99-2L22 6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.44 9.77 8.21 11.36.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.95.12 3.26.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.5 12.5 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
        </svg>
    );
}
