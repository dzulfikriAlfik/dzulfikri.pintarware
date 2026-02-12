import React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-azure/10 text-azure border-azure/20",
      outline: "bg-transparent border-azure/40 text-azure",
      frost: "bg-frost text-midnight border-frost-200",
      midnight: "bg-midnight/10 text-midnight border-midnight/20",
      success: "bg-emerald-50 text-emerald-700 border-emerald-200",
      glow: "bg-azure/10 text-azure border-azure/30 shadow-sm shadow-azure/10",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
