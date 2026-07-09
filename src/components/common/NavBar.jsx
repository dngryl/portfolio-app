import { useState } from "react";
import github from "../../assets/icons/github-logo.svg";
import heart from "../../assets/icons/heart.svg";
import { motion, useScroll, useTransform } from "motion/react";

export default function NavBar({Logo}) {
    const { scrollY } = useScroll();
    const width = useTransform(scrollY, [0, 300], ["90%", "60%"]);
    const backdropBlur= useTransform(scrollY, [0, 300], ["blur(0px)", "blur(40px)"]);
    const border = useTransform(scrollY,  [0, 300], ["0px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"] );

    const [likeCount, setLikeCount] = useState(0)

    return (
        <>
            <motion.div
                style={{width, backdropFilter:backdropBlur, border}}
                className="font-paperlogy fixed items-center mt-10 z-99 border border-[#181e1d]/5 rounded-2xl max-md:w-[90%]!">
                <div className="flex justify-between px-3 py-2 text-sm text-[#f9f9f9] ">
                    <div className="flex flex-row items-center gap-6 ">
                        <div className="flex flex-row gap-2 items-center">
                            <img src={Logo} className="w-5"/>
                            <p className="font-black">Dong Ryeul</p>
                        </div>
                        <p className="md:block hidden">/</p>
                        <p className="md:block hidden">I'm</p>
                        <p className="md:block hidden">Fine</p>
                        <p className="md:block hidden">Thanks</p>
                        <p className="md:block hidden">And</p>
                        <p className="md:block hidden">You?</p>
                    </div>

                    <div className="flex flex-row gap-2">
                        
                        <motion.div
                            whileTap={{scale: 1.1}}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="border border-[#f9f9f9]/10 px-3 py-2 bg-[#f9f9f9]/10 hover:bg-[#f9f9f9]/5 cursor-pointer backdrop-blur-2xl rounded-lg" onClick={()=> setLikeCount(likeCount+1)}>
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <img src={heart} className="w-4" />
                                    <p>{likeCount} LIKE</p>
                                </div>
                            </div>
                        </motion.div>
                                    
                        <div className="md:block hidden border border-[#f9f9f9]/10 px-3 py-2 bg-[#f9f9f9]/10 cursor-pointer hover:bg-[#f9f9f9]/5 backdrop-blur-2xl rounded-lg">
                            <a href="https://github.com/dngryl" className="flex flex-row items-center gap-2"><img src={github} className="w-5"/>GitHub</a>
                        </div>

                    </div>  
                </div>
            </motion.div>
            
        </>
    )
}