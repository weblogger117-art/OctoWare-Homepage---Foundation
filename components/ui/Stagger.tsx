"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Stagger({
  children,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
