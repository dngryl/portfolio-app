import { useState } from "react"

export default function SectionTwo() {


    const [hoverText, setHoverText] = useState(false)

    return (
        <>
            <div className="font-paperlogy w-full">

                <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-[90%] rounded-2xl">
                        <div className="h-full w-full grid grid-cols-2 px-50 relative ">
                            <div className="text-[#f9f9f9] absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] rounded-lg mx-10 text-[#181e1d] w-20 h-20 flex font-bold items-center justify-center text-4xl">Hi</p>
                            </div>

                            <div className="text-[#f9f9f9] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col justify-between">
                                    <p className="text-[#f9f9f9]/50">LEE DONG RYEUL / PORTFOLIO</p>
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

                            <div className="text-[#f9f9f9] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col justify-between">
                                    <p className="text-[#f9f9f9]/50">IDENTITY</p>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-3xl border-[#f9f9f9] text-center border-2 font-bold rounded-full p-4">{hoverText? "Framer Motion":"Interaction" }</p>
                                        <p className="text-center text-4xl">+</p>
                                        <p className="text-3xl border-[#f9f9f9] text-center border-2 font-bold rounded-full p-4">{hoverText? "Lottie":"Motion" }</p>
                                        <p className="text-center text-4xl">+</p>
                                        <p className="text-3xl border-[#f9f9f9] text-center border-2 font-bold rounded-full p-4">{hoverText? "Spline":"3D" }</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="bg-[#f9f9f9] w-full h-[90%] rounded-2xl">

                         <div className="h-full w-full grid grid-cols-2 px-50 relative">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#f9f9f9] w-20 h-20 flex font-bold items-center justify-center text-xl">HELLO</p>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <p className="font-bold text-8xl bg-[#00bf9f] w-fit">잠깐,</p>
                                            <p className="text-4xl">제 이야기 좀 들어보실래요?</p>
                                        </div>
                                        <p className="text-2xl">전 정지된 화면보다 움직이는 화면이 <br/> 좋았습니다.</p>
                                        <p className="text-2xl">그 마음은 지금도 똑같습니다. 단지, <br/> 도구만 바뀌었을 뿐.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col">
                                    <div className="flex flex-col h-full justify-between">
                                        <p className="text-[#181e1d]/50">TOOL STACK</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>



                <div className=" h-screen sticky top-0 flex items-center justify-cente overflow-hidden">
                    <div className="bg-[#00bf9f] w-full h-[90%] rounded-2xl">
                        
                        <div className="h-full w-full grid grid-cols-2 px-50 relative ">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#181e1d] mx-10 rounded-lg text-[#00bf9f] w-20 h-20 flex font-bold items-center justify-center text-lg">THANK</p>
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
                                    <div className="flex flex-col gap-3">
                                        <p className="text-3xl border-[#181e1d] text-center border-2 font-bold rounded-full p-4">{hoverText? "Framer Motion":"Interaction" }</p>
                                        <p className="text-center text-4xl">+</p>
                                        <p className="text-3xl border-[#181e1d] text-center border-2 font-bold rounded-full p-4">{hoverText? "Lottie":"Motion" }</p>
                                        <p className="text-center text-4xl">+</p>
                                        <p className="text-3xl border-[#181e1d] text-center border-2 font-bold rounded-full p-4">{hoverText? "Spline":"3D" }</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className=" h-screen sticky top-0 flex items-center justify-cente overflow-hidden">
                    <div className="bg-[#f9f9f9] w-full h-[90%] rounded-2xl">
                        <div className="h-full w-full grid grid-cols-2 px-50 relative ">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#f9f9f9] w-20 h-20 flex font-bold items-center justify-center text-2xl">AND</p>
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
                                    <div className="flex flex-col gap-3">
                                        <p className="text-3xl border-[#181e1d] text-center border-2 font-bold rounded-full p-4">{hoverText? "Framer Motion":"Interaction" }</p>
                                        <p className="text-center text-4xl">+</p>
                                        <p className="text-3xl border-[#181e1d] text-center border-2 font-bold rounded-full p-4">{hoverText? "Lottie":"Motion" }</p>
                                        <p className="text-center text-4xl">+</p>
                                        <p className="text-3xl border-[#181e1d] text-center border-2 font-bold rounded-full p-4">{hoverText? "Spline":"3D" }</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}