import { motion, AnimatePresence } from "motion/react";

import Hero from "../components/home/Hero";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import Loading from "../components/common/loading";
import { useState } from "react";


export default function Home({Logo}) {
   const [visible, setVisible] = useState(true);
   
   return (
      <>

         <div className="bg-[#181e1d] relative min-h-screen w-full">
            
            <AnimatePresence mode="wait">
               {visible ?
                  <Loading key="loading" setVisible={setVisible} motion={motion}/>
                :
                  <motion.div
                     key="content"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.3, ease: "easeInOut" }}
                     className="w-[60%] max-md:w-[90%] mx-auto">
                     <Hero Logo={Logo} motion={motion} AnimatePresence={AnimatePresence}/>
                     <SectionOne motion={motion}/>
                     <SectionTwo motion={motion}/>
                  </motion.div>
               }
            </AnimatePresence>
         </div>
      </>
   )
}
