import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-azure text-white shadow-lg shadow-azure/25 hover:bg-azure-500 hover:shadow-xl hover:shadow-azure/30 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-azure text-azure bg-transparent hover:bg-azure hover:text-white hover:shadow-lg hover:shadow-azure/25 hover:-translate-y-0.5",
        ghost:
          "text-midnight hover:bg-frost/60 hover:text-azure",
        frost:
          "bg-frost text-midnight hover:bg-frost-200 hover:shadow-md hover:-translate-y-0.5",
        midnight:
          "bg-midnight text-snow shadow-lg shadow-midnight/25 hover:bg-midnight-200 hover:shadow-xl hover:-translate-y-0.5",
        glass:
          "bg-white/20 backdrop-blur-md border border-white/30 text-midnight hover:bg-white/40 hover:shadow-lg hover:-translate-y-0.5",
        link: "text-azure underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-12 text-lg",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
