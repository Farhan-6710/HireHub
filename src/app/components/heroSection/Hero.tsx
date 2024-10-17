"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  fadeSlideUp,
  fadeSlideUp2,
  fadeSlideRight,
  fadeSlideLeft2,
} from "@/animations/index";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <div className="flex flex-col justify-center items-center p-4 py-12 pb-6 xs:pb-8 sm:py-16 xl:py-24 xl:pb-10 2xl:py-28 2xl:pb-20 container mx-auto relative z-0">
      
      <motion.h1
        ref={ref}
        variants={fadeSlideUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold sm:font-bold mb-4 lg:mb-4 lg:px-40 xl:px-44 2xl:px-52 text-center dark:text-gray-200"
      >
        We Get Your Brand The{" "}
        <span className="bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent">
          Opportunity
        </span>{" "}
        It Needs
      </motion.h1>
      <motion.p
        ref={ref}
        variants={fadeSlideUp2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-lg px-4 lg:px-40 xl:px-72 2xl:px-96 text-center mb-4 dark:text-gray-200"
      >
        We focus on creating modern, user-centric design interfaces that enhance
        user experience and drive engagement. Our goal is to elevate your online
        presence and ensure your brand stands out in the digital landscape.
      </motion.p>
      <div className="flex flex-col xs:flex-row gap-4 md:gap-6 relative z-10 group mt-4">
        <motion.div
          ref={ref}
          variants={fadeSlideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Link href="jobs">
            <Button
              size="xl"
              className="rounded-full justify-center items-center text:lg md:text-4xl md:font-semibold md:h-20 md:px-14 bg-gradient-to-r from-pink-600 to-blue-700 dark:text-white hover:text-slate-950 dark:hover:text-slate-950 duration-300"
            >
              Find Jobs
            </Button>
          </Link>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeSlideLeft2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Link href="/post-job">
            <Button
              size="xl"
              className="
            rounded-full 
            justify-center 
            items-center
            text:lg
            md:text-4xl
            md:font-semibold
            md:h-20
            md:px-14
            border 
            border-slate-400 
            duration-300 
            bg-white 
            text-slate-950 
            dark:bg-slate-950 
            dark:text-white 
            hover:text-white
            hover:bg-slate-950
            dark:hover:bg-gray-200 
            dark:hover:text-slate-950
            "
            >
              Post a Job
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
