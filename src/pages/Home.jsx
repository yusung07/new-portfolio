import React from "react";

export default function Home() {

    const recentInterest = [
        {
            title: "데이터베이스 최적화",
            content: `
                데이터베이스 성능 튜닝과 쿼리 최적화 방법에 관심을 갖고 공부하고 있습니다. 
                특히 대용량 데이터 처리 시 효율적인 인덱싱 전략에 집중하고 있습니다.
            `
        },
        {
            title: "Tensorflow 기반 딥러닝",
            content: `
                Tensorflow & Keras를 활용해 신경망 설계 및 구현과 딥러닝 모델 학습 방법에 대해 공부하고 있습니다.
            `
        }
    ];

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">소개</h1>

            <>
                <div className="flex items-center space-x-6">
                    <img src="https://Dayoon07.github.io/img/증명사진.jpg" alt="증명사진" className="w-32 h-32 rounded-full object-cover" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900">강다윤 <br className="lg:hidden" /> (Dayoon Kang)</h3>
                        <div className="flex space-x-6 mt-2">
                            <a href="https://github.com/Dayoon07" target="_blank" className="text-blue-500 hover:text-blue-700 flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 
                                        0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 
                                        1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 
                                        1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 
                                        1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 
                                        .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href="mailto:gangd0642@gmail.com" className="text-blue-500 hover:text-blue-700 flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                메일
                            </a>
                        </div>
                    </div>
                </div>
            </>
            <div className="mt-6 max-w-3xl">
                <h1 className="text-3xl font-bold mb-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    언젠가는 DB 분야로 진출하고 싶은 강다윤입니다. 저는 프론트엔드와 백엔드 프로젝트를 진행하며 <br className="max-lg:hidden" />
                    다양한 경험을 쌓았습니다. 그 과정에서 발생한 에러의 원인을 분석하고 해결하는 과정도 직접 겪으며, <br className="max-lg:hidden" />
                    이를 통해 실력을 더욱 키울 수 있었습니다. 앞으로도 모르는 것을 배우며 끊임없이 <br className="max-lg:hidden" />
                    성장하는 개발자가 되겠습니다.
                </p>
            </div>

            <div className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">요즘 관심사</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {recentInterest.map((c, i) => (
                        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                            </div>
                            <p className="text-gray-600">{c.content}</p>
                        </div> 
                    ))}
                </div>
            </div>
        </>
    );
}
