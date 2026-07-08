import { motion, AnimatePresence } from "motion/react";

import Hero from "../components/home/Hero";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";


export default function Home({Logo}) {

   return (
      <>   
         
         <div className="bg-[#181e1d] relative">

            <div className="w-[60%] max-md:w-[90%] mx-auto">
               <Hero Logo={Logo} motion={motion} AnimatePresence={AnimatePresence}/>
               <SectionOne motion={motion}/>
               <SectionTwo motion={motion}/>
            </div>

         </div>
      </>
   )
}
