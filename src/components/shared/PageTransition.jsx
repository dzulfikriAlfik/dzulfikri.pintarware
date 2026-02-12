import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PageTransition({ children, className }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn("min-h-screen", className)}
    >
      {children}
    </motion.main>
  );
}
