export default function Architecture() {
    const l = [
        {
            img: "https://dayoon07.github.io/static-page-test/img/mycloud-erd.png",
            title: "마이 클라우드 ERD",
            text: "마이 클라우드 ERD, 걸린시간 이틀, 이거는 금방 함"
        },
        {
            img: "https://dayoon07.github.io/static-page-test/img/video-platform-erd.png",
            title: "Whynot 비디오 플랫폼 ERD",
            text: "영상 플랫폼 ERD인데 이거는 3개월 동안 웹 앱 개발 병행하면서 ㅈㄹ함, 겨우 완성"
        },
        {
            img: "https://dayoon07.github.io/static-page-test/img/springbootblogerd.png",
            title: "spring boot blog ERD",
            text: "이거는 병행하면서 1개월 걸림"
        }
    ];
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">DB 설계 작업물</h1>

            <div className="lg:flex lg:gap-4">
                {l.map((content, idx) => (
                    <div className="max-w-sm overflow-hidden">
                        <a href={content.img} target="_blank">
                            <img src={content.img} className="w-full" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{content.title}</div>
                            <p className="text-gray-700 text-base">
                                {content.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}