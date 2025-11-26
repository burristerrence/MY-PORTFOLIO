"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  className = "",
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


