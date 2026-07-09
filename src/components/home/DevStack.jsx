import FramerIcon from "../../assets/logos/stack/framer.svg?react";
import Html5Icon from "../../assets/logos/stack/html5.svg?react";
import JavascriptIcon from "../../assets/logos/stack/javascript.svg?react";
import ReactIcon from "../../assets/logos/stack/react.svg?react";
import TailwindcssIcon from "../../assets/logos/stack/tailwindcss.svg?react";
import GsapIcon from "../../assets/logos/stack/gsap.svg?react";
import LottiefilesIcon from "../../assets/logos/stack/lottiefiles.svg?react";
import { motion } from "motion/react";

export default function DevStack() {

    const DevArr = [
        {id:0, tool: "Java Scripts", Icon: JavascriptIcon},
        {id:1, tool: "React", Icon: ReactIcon},
        {id:2, tool: "HTML", Icon: Html5Icon},
        {id:3, tool: "Tailwind CSS", Icon: TailwindcssIcon},
        {id:4, tool: "Framer Motion", Icon: FramerIcon},
        {id:5, tool: "GSAP", Icon: GsapIcon},
        {id:6, tool: "LottieFiles", Icon: LottiefilesIcon}
    ]

   return (
       <>
            <div className="flex items-center flex-col h-full justify-center gap-2 px-6 relative">
                <div className="overflow-hidden h-full absolute inset-0 bg-gradient-to-b from-[#181e1d] -from-10% via-transparent via-50% to-[#181e1d] to-90% z-10 pointer-events-none"></div>
                <motion.div
                        className="transform-gpu backface-hidden antialiased flex flex-col w-full"
                        animate={{ y: ["0%", "-25%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   >
                    {[...DevArr, ...DevArr, ...DevArr, ...DevArr].map((item, i) => (
                        <motion.div
                            whileHover={{scale: 1.05}}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            key={i}
                            className="mb-2 flex flex-row gap-3 p-2 w-full h-10 text-nowrap items-center rounded-lg backdrop-blur-2xl border border-[#f9f9f9]/10 shadow-black/25 shadow-xl">
                            <item.Icon className="w-6 text-[#00bf9f]"/>
                            <div className="w-[1px] h-full bg-[#f9f9f9]/10" />
                            <p className="text-sm text-[#f9f9f9]">{item.tool}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
       </>
   )
}
