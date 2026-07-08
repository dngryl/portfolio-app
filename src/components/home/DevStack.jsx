import framer from "../../assets/logos/stack/framer.svg";
import html5 from "../../assets/logos/stack/html5.svg";
import javascript from "../../assets/logos/stack/javascript.svg";
import react from "../../assets/logos/stack/react.svg";
import tailwindcss from "../../assets/logos/stack/tailwindcss.svg";
import gsap from "../../assets/logos/stack/gsap.svg";
import lottiefiles from "../../assets/logos/stack/lottiefiles.svg";
import { motion } from "motion/react";

export default function DevStack() {

    const DevArr = [
        {id:0, tool: "Java Scripts", src: javascript},
        {id:1, tool: "React", src: react},
        {id:2, tool: "HTML", src: html5},
        {id:3, tool: "Tailwind CSS", src: tailwindcss},
        {id:4, tool: "Framer Motion", src: framer},
        {id:5, tool: "GSAP", src: gsap},
        {id:6, tool: "LottieFiles", src: lottiefiles}
    ]

   return (
       <>
            <div className="flex items-center flex-col h-full justify-center gap-2 px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#181e1d] -from-10% via-transparent via-50% to-[#181e1d] to-90% z-10 pointer-events-none"></div>
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
                            <img src={item.src} className="w-6"/>
                            <div className="w-[1px] h-full bg-[#f9f9f9]/10" />
                            <p className="text-sm text-[#f9f9f9]">{item.tool}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
       </>
   )
}