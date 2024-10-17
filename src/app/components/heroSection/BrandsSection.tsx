"use client"

import { useRef } from "react";
import React from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCards } from "../extras/InfiniteMovingCards";
import { fade } from "@/animations";

export default function BrandsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once
  return (
    <motion.div
      ref={ref}
      variants={fade}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="-mt-4 relativez-0"
    >
      <InfiniteMovingCards direction="left" speed="slow" />
    </motion.div>
  );
}
