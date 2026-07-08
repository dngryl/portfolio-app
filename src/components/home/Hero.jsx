
import { useState } from "react";
import { useMotionValue } from "motion/react";

import DotField from "../common/BG";
import TitleLeft from "./TitleLeft";
import TitleRight from "./TitleRight";

export default function Hero({motion, AnimatePresence}) {
    const [swapped, setSwapped] = useState(false)

    const progress = useMotionValue(0);
    const progress2 = useMotionValue(0);

   return (
       <>
            <div className="font-paperlogy flex justify-center">
                <div className="absolute w-full h-full bg-gradient-to-t from-[#181e1d] from-0% to-transparent to-100% z-10"></div>
                <div style={{ width: '100%', height: '100vh', position: 'absolute'}}>
                    <DotField
                    dotRadius={1.5}
                    dotSpacing={14}
                    bulgeStrength={67}
                    glowRadius={160}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={500}
                    cursorForce={0.1}
                    bulgeOnly
                    gradientFrom="#00bf9f"
                    gradientTo="#00bf9f"
                    glowColor="#181e1d"
                    />
                </div>

                <div className="flex justify-center items-center w-full h-[100vh] z-10">
                    <div className="grid grid-cols-2 gap-48 text-nowrap items-center w-full">

                        <motion.div
                            layoutId="A"
                            style={{ order: swapped ? 2: 1}}>
                            <TitleLeft progress={progress} progress2={progress2} swapped={swapped} setSwapped={setSwapped} motion={motion} />
                        </motion.div>
                        <motion.div
                            layoutId="B"
                            style={{ order: swapped ? 1: 2}}>
                            <TitleRight swapped={swapped} motion={motion} progress2={progress2} progress={progress} AnimatePresence={AnimatePresence}/>
                        </motion.div>

                    </div>
                </div>
            </div> 
       </>
   )
}