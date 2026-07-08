import { motion, AnimatePresence } from "motion/react";

import Hero from "../components/home/Hero";
import SectionOne from "../components/home/SectionOne";


export default function Home({Logo}) {

   return (
      <>   
         
         <div className="bg-[#181e1d]">

            <div className="w-[60%] max-md:w-[90%] mx-auto">
               <Hero Logo={Logo} motion={motion} AnimatePresence={AnimatePresence}/>
               <SectionOne motion={motion}/>
               

            </div>

         </div>
      </>
   )
}
