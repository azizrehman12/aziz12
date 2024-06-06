'use client'

import { AnimatePresence , motion } from "framer-motion";
import  Stairs  from "./Stairs"
import { usePathname } from "next/navigation";
const StairTransition =()=>{
    const pathname= usePathname ();


    return <>
     <AnimatePresence mode="wait">
        
         <div  key={ pathname}>
            <div className="h-screen w-screen fixed top-1 left-0 
            pointer-events-none  z-48 flex "> 
            <Stairs/>
            </div>

            <motion.div 
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
            initial={{opacity:1}}
            animate={{opacity: 0, 
                duration:0.4,
                ease:"easeInOut"
            }}
            />
         </div>
         
         </AnimatePresence>
         </>
};

export default StairTransition;