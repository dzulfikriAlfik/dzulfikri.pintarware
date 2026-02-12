import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-frost-200 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm text-midnight placeholder:text-midnight/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure/30 focus-visible:border-azure disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-30 w-full rounded-xl border border-frost-200 bg-white/60 backdrop-blur-sm px-4 py-3 text-sm text-midnight placeholder:text-midnight/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure/30 focus-visible:border-azure disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Input, Textarea };
