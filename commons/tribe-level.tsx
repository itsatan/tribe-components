import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tribeLevelVariants = cva(
    "w-fit flex justify-center items-center gap-1 px-1 rounded-[3px] text-xs select-none",
    {
        variants: {
            variant: {
                official: "bg-gradient-to-r from-black/50 via-black/75 to-black text-white",
                ordinary: "bg-[#7ea4e1] text-white",
            },
        },
        defaultVariants: {
            variant: "ordinary",
        },
    }
);

interface TribeLevelProps extends VariantProps<typeof tribeLevelVariants> {
    level: number;
    className?: string;
}

export function TribeLevel({
    level,
    variant,
    className
}: TribeLevelProps) {
    return (
        <span className={cn(tribeLevelVariants({ variant }), className)}>
            Lv.{level}
        </span>
    );
}
