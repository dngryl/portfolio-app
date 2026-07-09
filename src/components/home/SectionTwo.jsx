import { useState } from "react"
import ReactIcon from "../../assets/logos/stack/react.svg?react"
import JavascriptIcon from "../../assets/logos/stack/javascript.svg?react"
import CssIcon from "../../assets/logos/stack/css.svg?react"
import Html5Icon from "../../assets/logos/stack/html5.svg?react"
import FramerIcon from "../../assets/logos/stack/framer.svg?react"
import LottiefilesIcon from "../../assets/logos/stack/lottiefiles.svg?react"
import TailwindcssIcon from "../../assets/logos/stack/tailwindcss.svg?react"
import GsapIcon from "../../assets/logos/stack/gsap.svg?react"
import AffinityIcon from "../../assets/logos/svg/affinity.svg?react"
import AfterEffectsIcon from "../../assets/logos/svg/aftereffects.svg?react"
import BlenderIcon from "../../assets/logos/svg/blender.svg?react"
import ViteIcon from "../../assets/logos/stack/vite.svg?react"
import GithubIcon from "../../assets/logos/svg/github.svg?react"
import NotionIcon from "../../assets/logos/svg/notion.svg?react"
import ClaudeIcon from "../../assets/logos/svg/claude.svg?react"
import VercelIcon from "../../assets/logos/svg/vercel.svg?react"

export default function SectionTwo() {


    const [hoverText, setHoverText] = useState(false)

    return (
        <>
            <div className="font-paperlogy w-full">

                <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-[90%] rounded-2xl">
                        <div className="h-full w-full grid grid-cols-2 px-50 relative ">
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

                         <div className="h-full w-full grid grid-cols-2 gap-20 px-50 relative">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#f9f9f9] w-20 h-20 flex font-bold items-center justify-center text-2xl">Fine</p>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col">
                                    <div className="flex flex-col h-full pr-10 justify-between">
                                        <div>
                                            <p className="font-bold text-8xl bg-[#00bf9f] w-fit">섬세함,</p>
                                            <p className="text-4xl">움직임에서 크게 <br/> 드러납니다.</p>
                                        </div>
                                        <p className="text-2xl">정지된 화면을 움직이게 만드는 <br/> 일을 하며 재미를 느껴왔고,</p>
                                        <p className="text-2xl">그 마음은 지금도 똑같습니다. <br/> 단지, 도구만 바뀌었을 뿐.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col">
                                    <div className="flex flex-col h-full justify-between">
                                        <p className="text-[#181e1d]/50">STACK</p>

                                        <div className="flex flex-col gap-2">
                                            <p className="border-[#f9f9f9] text-sm font-bold">Core</p>
                                            <div className="flex flex-row gap-4">
                                                <Html5Icon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <CssIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <JavascriptIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <ViteIcon className="w-10" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="border-[#f9f9f9] text-sm font-bold">Library</p>
                                            <div className="flex flex-row gap-4">
                                                <ReactIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <TailwindcssIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <FramerIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <GsapIcon className="w-10" />
                                                <div className="w-[0.1px] h-[90%] bg-[#181e1d]/50" />
                                                <LottiefilesIcon className="w-10" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="border-[#f9f9f9] text-sm font-bold">Others</p>
                                            <div className="flex flex-row gap-4">
                                                <GithubIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <ClaudeIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <VercelIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <NotionIcon className="w-10" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="border-[#f9f9f9] text-sm font-bold">Tools</p>
                                            <div className="flex flex-row gap-4">
                                                <AfterEffectsIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <BlenderIcon className="w-10" />
                                                <div className="w-px h-[90%] bg-[#181e1d]/50" />
                                                <AffinityIcon className="w-10" />
                                            </div>
                                        </div>
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
                                <p className="bg-[#181e1d] mx-10 rounded-lg text-[#00bf9f] w-20 h-20 flex font-bold items-center justify-center text-lg">Thanks</p>
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