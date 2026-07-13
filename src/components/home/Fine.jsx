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
import SplineIcon from "../../assets/logos/svg/spline.svg?react"
import CursorIcon from "../../assets/logos/svg/cursor.svg?react"
export default function Fine() {


    return (
        <>
            <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="bg-[#f9f9f9] w-full h-[90%] rounded-2xl">

                         <div className="h-full w-full grid grid-cols-2 gap-10 px-50 relative">
                            <div className="absolute top-0 left-0 mt-20">
                                <p className="bg-[#00bf9f] mx-10 rounded-lg text-[#f9f9f9] w-20 h-20 flex font-bold items-center justify-center text-2xl">Fine</p>
                            </div>

                            <div className="text-[#181e1d] flex flex-col gap-6 justify-center">
                                <div className="h-100 flex flex-col">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <p className="font-bold text-8xl bg-[#00bf9f] w-fit">섬세함,</p>
                                            <p className="text-4xl">움직임에서 크게 <br/> 드러납니다.</p>
                                        </div>
                                        <p className="text-2xl">정지된 화면을 움직이게 만드는 일을 하며 재미를 느껴왔고,</p>
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
                                                <CursorIcon className="w-10" />
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
                                                <SplineIcon className="w-10" />
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
        </>
    )
}