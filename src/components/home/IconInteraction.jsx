import ToolIcon from "../../assets/icons/toolbox.svg?react";
import CircleIcon from "../../assets/icons/circle-light2.svg?react";
import CloseIcon from "../../assets/icons/x.svg?react";
import blender from "../../assets/logos/tools/Blender.webp";
import spline from "../../assets/logos/tools/Spline.webp";
import affinity from "../../assets/logos/tools/Affinity.webp";
import claude from "../../assets/logos/tools/Claude.webp";
import codium from "../../assets/logos/tools/Codium.webp";
import afterEffects from "../../assets/logos/tools/AfterEffects.webp";
import {useState } from "react";

export default function IconInteraction({motion}) {

    const [showIcon, setShowIcon] = useState(false)

    const MotionCircle = motion.create(CircleIcon)


   return (
       <>
            <div className="relative w-full h-full">
                <motion.div
                    initial={{ width: 100, height: 100 }}
                    animate={{ width: showIcon ? 40 : 100, height: showIcon ? 40 : 100 }}
                    whileHover={{ width: showIcon ? 60 : 60, height: showIcon ? 60 : 60 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => setShowIcon(!showIcon)}
                    className="bg-[#00bf9f] hover:bg-[#00ab8f] rounded-full p-3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 cursor-pointer flex items-center justify-center"
                >
                    {showIcon
                        ? <CloseIcon className="w-full h-full" />
                        : <ToolIcon className="w-full h-full" />}
                </motion.div>
                {!showIcon && <div>
                    <MotionCircle
                        initial={{ scale: 0, opacity:1 }}
                        animate={{ scale: 3, opacity:0 }}
                        exit={{ scale: 0,}}
                        transition={{ duration: 1, repeat:Infinity, repeatType: "loop", ease: "easeInOut" }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    <MotionCircle
                        initial={{ scale: 0, opacity:1 }}
                        animate={{ scale: 3, opacity:0 }}
                        exit={{ scale: 0,}}
                        transition={{ duration: 1,delay:0.2, repeat:Infinity, repeatType: "loop", ease: "easeInOut" }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    <MotionCircle
                        initial={{ scale: 0, opacity:1 }}
                        animate={{ scale: 3, opacity:0 }}
                        exit={{ scale: 0,}}
                        transition={{ duration: 1,delay:0.4, repeat:Infinity, repeatType: "loop", ease: "easeInOut" }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>}
                
                
                <motion.img
                    initial={{ x:0, y: 0, opacity: 0 }}
                    animate={{ x: showIcon ? 38:0 , y: showIcon ? -65 : 0, opacity: showIcon ? 100:0}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: showIcon ? 0.10: 0, type: "spring", stiffness: 400, damping: 25 }}
                    src={blender} className="rounded-full w-10 h-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                <motion.img
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ x: showIcon ? 75 : 0, opacity: showIcon ? 100:0}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: showIcon ? 0.15 : 0, type: "spring", stiffness: 400, damping: 25}}
                    src={codium} className="rounded-full w-10 h-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                <motion.img
                    initial={{ x:0, y: 0, opacity: 0 }}
                    animate={{ x: showIcon ? 38:0 , y: showIcon ? 65 : 0, opacity: showIcon ? 100:0}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: showIcon ? 0.20 :0, type: "spring", stiffness: 400, damping: 25}}
                    src={affinity} className="rounded-full w-10 h-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                <motion.img
                    initial={{ x:0, y: 0, opacity: 0 }}
                    animate={{ x: showIcon ? -38:0 , y: showIcon ? 65 : 0, opacity: showIcon ? 100:0}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: showIcon ? 0.30 : 0, type: "spring", stiffness: 400, damping: 25}}
                    src={afterEffects} className="rounded-full w-10 h-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />


                <motion.img
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ x: showIcon ? -75 : 0, opacity: showIcon ? 100:0}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: showIcon ? 0.35 :0, type: "spring", stiffness: 400, damping: 25}}
                    src={claude} className="rounded-full w-10 h-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                <motion.img
                    initial={{ x:0, y: 0, opacity: 0 }}
                    animate={{ x: showIcon ? -38:0 , y: showIcon ? -65 : 0, opacity: showIcon ? 100:0}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: showIcon ? 0.40 : 0, type: "spring", stiffness: 400, damping: 25}}
                    src={spline} className="rounded-full w-10 h-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                
            </div> 
       </>
   )
}