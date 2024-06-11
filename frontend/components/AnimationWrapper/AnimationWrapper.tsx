"use client";

import { motion } from "framer-motion"


export function AnimationWrapper({children}: any) {

  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ amount: 0.9, once: true }}
    >
      {children}
    </motion.div>
  );
}