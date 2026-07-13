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
                        <div className="h-full w-full flex flex-col justify-center gap-10 relative ">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#f9f9f9] w-20 h-20 flex font-bold items-center justify-center text-2xl">And</p>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-50 flex flex-col justify-between px-50">
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

                                <div className="text-[#181e1d] w-full px-10">
                                    <div className="w-[150%] flex flex-col">
                                        <div className="h-50">

                                            <div className="grid grid-cols-5 gap-4 items-center relative">
                                                <div className="bg-[#00bf9f] w-5 aspect-square rounded-full mb-1.5 z-20"></div>
                                                <div className="bg-[#c1c2c2] w-5 aspect-square rounded-full mb-1.5 z-20"></div>
                                                <div className="bg-[#c1c2c2] w-5 aspect-square rounded-full mb-1.5 z-20"></div>
                                                <div className="bg-[#c1c2c2] w-5 aspect-square rounded-full mb-1.5 z-20"></div>
                                                <div className="bg-[#c1c2c2] w-5 aspect-square rounded-full mb-1.5 z-20"></div>

                                                <div className="absolute -translate-y-1/2 flex top-1/2 left-0 border-t-2 border-[#00bf9f] w-[20%] z-10  h-2"></div>
                                                <div className="absolute -translate-y-1/2 top-1/2 left-0 border-t-2 border-[#181e1d]/10 w-[100%] h-2"></div>
                                            </div>

                                            <div className="grid grid-cols-5 relative gap-4">
                                        
                                                <div className="flex flex-col justify-between gap-4 rounded-lg p-6 bg-[#00bf9f]">
                                                    <div className="flex flex-col gap-4">
                                                        <p className="font-bold text-4xl text-[#f9f9f9] tracking-wide">2017-2020</p>
                                                        <p className="font-bold text-xl ">디자인에서 모션으로</p>
                                                        <p className="text-[#181e1d]/75">병원 홍보물 디자인·영상 제작에서 시작해, 메디컬 분야 모션그래픽을 기획부터 제작까지.</p>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-4">
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">AE</p>
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm border-[#181e1d]/25 px-2 py-1 rounded-lg">Design</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-between gap-4 rounded-lg p-6">
                                                    <div className="flex flex-col gap-4">
                                                        <p className="font-bold text-4xl text-[#c1c2c2] tracking-wide">2022–2024</p>
                                                        <p className="font-bold text-xl ">3D로 시각화하다</p>
                                                        <p className="text-[#181e1d]/75">전통 소재 3D 모델링, 시술 과정 3D 시각화, 교육 콘텐츠 모션그래픽.</p>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-4">
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">C4D</p>
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm border-[#181e1d]/25 px-2 py-1 rounded-lg">Redshift</p>
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm border-[#181e1d]/25 px-2 py-1 rounded-lg">Fusion360</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-between gap-4 rounded-lg p-6">
                                                    <div className="flex flex-col gap-4">
                                                        <p className="font-bold text-4xl text-[#c1c2c2] tracking-wide">2024–2025</p>
                                                        <p className="font-bold text-xl ">혼자서 끝까지</p>
                                                        <p className="text-[#181e1d]/75">프리랜서 외주 약 20건. 기획–시안–모션 전 과정 단독. 될 때까지 다듬는 습관이 여기서.</p>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-4">
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">Freelancer</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-between gap-4 rounded-lg p-6">
                                                    <div className="flex flex-col gap-4">
                                                        <p className="font-bold text-4xl text-[#c1c2c2] tracking-wide">2025–2026</p>
                                                        <p className="font-bold text-xl ">코드를 밟아보다</p>
                                                        <p className="text-[#181e1d]/75">부트캠프에서 React를 만나 방향 전환. 움직임을 만드는 도구가 바뀌었을 뿐.</p>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-4">
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">Bootcamp</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-between gap-4 rounded-lg p-6">
                                                    <div className="flex flex-col gap-4">
                                                        <p className="font-bold text-4xl text-[#c1c2c2] tracking-wide">2026–NOW</p>
                                                        <p className="font-bold text-xl ">여기까지 왔습니다.</p>
                                                        <p className="text-[#181e1d]/75">타이밍과 무게감을 아는 프론트엔드 개발자.</p>
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4 text-center ">
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">React</p>
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">HTML</p>
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">Tailwind</p>
                                                        <p className="font-bold text-[#181e1d]/50 border-1 text-sm  border-[#181e1d]/25 px-2 py-1 rounded-lg">Motion</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
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