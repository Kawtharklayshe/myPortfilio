import React from "react";

import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    link: "Prokoders",

    name: "Senior Frontend  Developer",
    description:
      "Developing and maintaining web applications using Vue,Typescript .",
  },
  {
    link: "MindTorches",

    name: "Vue.js Developer",
    description:
      "Developing and maintaining web applications using Vue ,Nuxt,Typescript.",
  },
  {
    link: "Freelance",

    name: "React developer",
    description:
      "Developing and maintaining web applications using React.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto extop">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0
          ">
            <h2 className="h2 text-accent mb-6">Work Experience</h2>

           
            {/* <button className="btn btn-sm ">See my Work</button> */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px]
                  flex"
                    key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      {/* <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px]
                      flex justify-center items-center
                      ">
                        <BsArrowUpRight />
                      </a> */}
                      <a href="#" className="text-gradient text-sm">
                     
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
