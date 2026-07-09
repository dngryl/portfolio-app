import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef } from "react";

export default function Loading({setVisible, motion}) {

    const lottieRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{opacity:1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-99 w-full h-full bg-[#181e1d]">
            <DotLottieReact
                dotLottieRefCallback={(instance) => { lottieRef.current = instance; }}
                src="/lottie/loading.json"
                loop
                autoplay
                className="w-100 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
        </motion.div>
    )
}