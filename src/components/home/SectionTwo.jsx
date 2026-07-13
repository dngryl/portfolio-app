import { useState } from "react"
import Fine from "./Fine"
import Thanks from "./Thanks"


export default function SectionTwo({motion}) {


    const [hoverId, setHoverId] = useState(null)

    const identityStack = [
        {id: 1, name1: "Framer Motion", name2: "Interaction"},
        {id: 2, name1: "Lottie", name2: "Motion"},
        {id: 3, name1: "Spline", name2: "3D"}
    ]

    return (
        <>
            <div className="font-paperlogy w-full">

                <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-[90%] rounded-2xl">
                        <div className="h-full w-full grid grid-cols-2 gap-10 px-50 relative">
                            <div className="text-[#f9f9f9] absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] rounded-lg mx-10 text-[#181e1d] w-20 h-20 flex font-bold items-center justify-center text-4xl">I'm</p>
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
                                        {identityStack.map((item, index) => {
                                            return (
                                                <div key={item.id}>
                                                    <motion.p
                                                        initial={{opacity:1}}
                                                        exit={{opacity:0}}
                                                        whileHover={{opacity:1, backgroundColor: hoverId === null ? "" : "#00bf9f", borderColor: hoverId === null ? "" : "#00bf9f"}}
                                                        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                                                        onMouseEnter={()=> setHoverId(item.id)}
                                                        onMouseLeave={()=> setHoverId(null)}
                                                        className="text-3xl border-[#f9f9f9] text-center border-2 font-bold rounded-full p-4">{hoverId === item.id ? item.name1:item.name2 }</motion.p>
                                                    {index === 2 ? "" : <p className="text-center text-4xl">+</p>}
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <Fine />


                <Thanks />


                <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="bg-[#f9f9f9] w-full h-[90%] rounded-2xl">
                        <div className="h-full w-full grid grid-cols-2 px-50 relative ">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#f9f9f9] w-20 h-20 flex font-bold items-center justify-center text-2xl">And</p>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-50 flex flex-col justify-between">
                                    <p className="text-[#181e1d]/50">LEE DONG RYEUL / CARREER</p>
                                    <div className="text-4xl font-bold">
                                        <p>그리고,</p>
                                        <p>그 시간들입니다.</p>
                                    </div>
                                    <div className="text-lg">
                                        <p>디자인, 의료, 전시·문화 등 분야를 가리지 않고</p>
                                        <p>움직임을 만들어 온 7년입니다.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-50 flex flex-col justify-between">
                                    <p className="text-[#181e1d]/50">IDENTITY</p>
                                    <div className="flex flex-col gap-3">

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