export default function SectionThree() {
    return (
        <>
            <div className="h-screen top-0 flex items-center justify-cente overflow-hidden">
                    <div className="w-full h-[90%] rounded-2xl">
                        <div className="h-full w-full grid grid-cols-2 px-50 relative ">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#181e1d] w-20 h-20 flex font-bold items-center justify-center text-3xl">You</p>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col justify-between">
                                    <p className="text-[#181e1d]/50">LEE DONG RYEUL / PORTFOLIO</p>
                                    <div className="flex flex-col gap-6">
                                        <div className="text-lg">
                                            <p>타이밍과 무게감,</p>
                                            <p>움직임을 볼 줄 아는 개발자</p>
                                        </div>
                                        <p className="text-8xl font-bold">이동렬</p>
                                        <div className="text-lg">
                                            <p>7년 차 모션그래픽 디자이너에서,</p>
                                            <p>지금은 프론트엔드 개발자로.</p>
                                        </div>
                                    </div>
                                    <p className="text-xs">2026.07 국비 부트캠프 수료.</p>
                                </div>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col justify-between">
                                    <p className="text-[#181e1d]/50">IDENTITY</p>

                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
        </>
    )
}