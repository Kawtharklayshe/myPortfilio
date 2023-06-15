import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion"
import Image from "../assets/me.png";;
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto mb-10">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen  ">
          <motion.div 
             variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3  }}
          
          className="flex-1 w-100 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top h-75">

<img src={Image} alt="" />

          </motion.div>

          <motion.div  className="flex-1" 
             variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3  }}
          
          >
            <h2 className="h2 text-accent">About me</h2>
           
            <p className="mb-6">
            Highly skilled and motivated Front-End Web Developer with over 3 years of experience in developing responsive and
user-friendly websites. Proficient in HTML, CSS, Bootstrap, Tailwind, JavaScript, Typescript, Vue,nuxt and React. Proven
ability to collaborate effectively with cross-functional teams to design and develop innovative solutions that meet business
requirements. Strong problem-solving skills. Delivering high-quality, scalable web applications. Skilled in
fostering stakeholder relationships, driving project success, and implementing decentralized applications.
            </p>
         
         
          <div className="flex gap-x-6 lg:gap-x-10  mb-12">
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                <CountUp start={0} end={3} duration={3} /> 
               </div>
              <div className="font-primary text-sm tracking-[2px]">
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                <CountUp start={0} end={5} duration={3} /> 
                
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Staisfied <br />
                Clients
              </div>
            </div>
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                <CountUp start={0} end={10} duration={3} /> 
                
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Projects
                <br />
                Completed
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg"> Contact me </button>
            <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
