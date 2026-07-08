import { useState } from "react";
import ProfileImg from "/src/assets/images/mimoticon.png"
import resetImg from "/src/assets/icons/reset.svg"

export default function TitleRight({swapped, motion, AnimatePresence, progress, progress2}) {

    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)

   return (
       <>   
            <motion.div
                initial={{ borderRadius: "16px" }}
                animate={{ borderRadius: swapped ? "1000px" : "16px", aspectRatio: 1 / 1, scale:  swapped ? "70%": "100%" }}
                transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}

                className="relative border text-[#f9f9f9] border-[#f9f9f9]/10 backdrop-blur-2xl w-full overflow-hidden h-full shadow-[#000000]/50 shadow-2xl">
                
                <AnimatePresence>
                    <motion.img
                        initial={{ y: 550}}
                        animate={{ y:swapped ? 0:550}}
                        exit={{ y:550 }}
                        transition={{ duration: 0.3, delay: swapped ? 0.3:0, ease: "easeInOut" }}
                        src={ProfileImg} className={`${swapped ? "block" : "hidden"} w-full h-full flex items-center justify-center object-contain`} />
                </AnimatePresence>
                
                <motion.div
                    initial={{opacity: 100 }}
                    animate={{ opacity: swapped ? 0 : 100 }}
                    transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                    className="flex flex-row justify-between items-center h-10 p-3 m-2">
                    <div className="flex flex-row gap-2">
                        <div className="w-3 h-3 bg-[#f9f9f9]/15 rounded-full"></div>
                        <div className="w-3 h-3 bg-[#f9f9f9]/15 rounded-full"></div>
                        <div className="w-3 h-3 bg-[#f9f9f9]/15 rounded-full"></div>
                    </div>
                    <motion.img
                        whileTap={{scale: 1.2}}
                        src={resetImg} className="border w-9 h-9 p-2 rounded-xl border-[#f9f9f9]/10 hover:bg-[#f9f9f9]/15 backdrop-blur-2xl cursor-pointer" onClick={()=> {progress.set(0); progress2.set(0); setVal1(0); setVal2(0)}}/>
                </motion.div>

                <motion.hr
                    initial={{opacity: 100 }}
                    animate={{ opacity: swapped ? 0 : 100 }}
                    transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                    className="border-[#f9f9f9]/15"/>

                <motion.div
                    initial={{opacity: 100 }}
                    animate={{ opacity: swapped ? 0 : 100 }}
                    transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                    
                    className="p-3 m-2 flex flex-col gap-2">
                    <div className="flex flex-row">
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`<`}
                        </p>
                        <p className="text-xs text-[#00bf9f]">
                            {`RainbowFont`}
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-xs text-[#3A86FF] pl-6">
                            {`className="text-6xl font-black text-[`}
                        </p>
                        <input
                        type="range"
                        min={0}
                        max={100}
                        value={val1}
                        onChange={(e) => {setVal1(Number((e.target.value))); progress.set(e.target.value / 100)}}
                        />
                        <p className="text-xs text-[#3A86FF]">
                            {`]"`}
                        </p>
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`>`}
                        </p>

                    </div>
                    <p className="text-xs text-[#f9f9f9] pl-6">
                        {`디자인`}
                    </p>
                    <div className="flex flex-row">
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`</`}
                        </p>
                        <p className="text-xs text-[#00bf9f]">
                            {`RainbowFont`}
                        </p>
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`>`}
                        </p>
                    </div>

                    <div className="flex flex-row">
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`<`}
                        </p>
                        <p className="text-xs text-[#00bf9f]">
                            {`RainbowFont`}
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-xs text-[#3A86FF] pl-6">
                            {`className="text-6xl font-black text-[`}
                        </p>
                        <input
                        type="range"
                        min={0}
                        max={100}
                        value={val2}
                        onChange={(e) => {setVal2(Number(e.target.value)); progress2.set(e.target.value / 100)}}
                        />
                        <p className="text-xs text-[#000101]">
                            {`]"`}
                        </p>
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`>`}
                        </p>

                    </div>
                    <p className="text-xs text-[#f9f9f9] pl-6">
                        {`코드`}
                    </p>
                    <div className="flex flex-row">
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`</`}
                        </p>
                        <p className="text-xs text-[#00bf9f]">
                            {`RainbowFont`}
                        </p>
                        <p className="text-xs text-[#f9f9f9]/25">
                            {`>`}
                        </p>
                    </div>

                    
                </motion.div>

            </motion.div>
       </>
   )
}