import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
           <motion.div  
             variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3  }} 
              className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"> 
            <div className="mb-6">
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
              </h2>
              <p className="mb-16 max-w-sm">
              I aim to learn everything related to web application development, and I seek to have a role in developing new technologies or improving existing ones.
              </p>
              <button className="btn btn-sm"> View all Projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">  React</span>
             </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50" >
                <span className="text-white text-3xl">CryptoCurrency App</span>
              </div>
            </div>
          </motion.div>
         <motion.div  
             variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3  }}
               className="flex-1 flex flex-col gap-y-10 ">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">  Nuxt</span>
             </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50" >
                <span className="text-white text-3xl">/Three.js project</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">  Vue3 </span>
             </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50" >
                <span className="text-white text-3xl">Store dashboard</span>
              </div>
            </div>
            
            
            
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
