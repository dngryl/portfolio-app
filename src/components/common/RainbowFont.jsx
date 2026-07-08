import { motion, useMotionTemplate, useTransform } from "motion/react";

export default function RainbowFont({children, progress, className}) {

        const gradColorArr = [
            {color1: "#FFFFFF", color2:"#FFFFFF" },
            {color1: "#FF4D6D", color2:"#FF8C42" },
            {color1: "#FF8C42", color2:"#F5C518" },
            {color1: "#F5C518", color2:"#00C9A7" },
            {color1: "#00C9A7", color2:"#3A86FF" },
            {color1: "#3A86FF", color2:"#9B5DE5" },
            {color1: "#9B5DE5", color2:"#FF6EB4" },
            {color1: "#FF6EB4", color2:"#FF4D6D" },
        ]
        
        const inputRange = gradColorArr.map((_, i) => i / gradColorArr.length)

        const color1 = gradColorArr.map((item)=> item.color1);
        const color2 = gradColorArr.map((item)=> item.color2);

        const c1 = useTransform(progress, inputRange, color1)
        const c2 = useTransform(progress, inputRange, color2)

        const gradText = useMotionTemplate`linear-gradient(90deg, ${c1}, ${c2})`

   return (
       <>   
            <motion.p
                className={className}
                style={{
                backgroundImage: gradText,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                }}>
                    {children}
            </motion.p>
       </>
   )
}