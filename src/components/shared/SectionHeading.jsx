import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({ title, subtitle, align = "center", className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-midnight/50 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "mt-6 h-1 w-20 rounded-full bg-linear-to-r from-azure to-azure-200",
        align === "center" && "mx-auto"
      )} />
    </motion.div>
  );
}
