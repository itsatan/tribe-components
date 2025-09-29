import { cn } from "@/lib/utils";

type TribeLevelVariant = "official" | "ordinary";

type TribeLevelProps = {
    level: number;
    variant?: TribeLevelVariant;
    className?: string;
};

const variantStyles: Record<TribeLevelVariant, string> = {
    official: "bg-gradient-to-r from-black/50 via-black/75 to-black text-white",
    ordinary: "bg-[#7ea4e1] text-white",
};

export function TribeLevel({
    level,
    variant = "ordinary",
    className,
}: TribeLevelProps) {
    return (
        <span
            className={cn(
                "w-fit flex justify-center items-center gap-1 px-1 rounded-[3px] text-xs select-none",
                variantStyles[variant],
                className
            )}
        >
            {level}级
        </span>
    );
}
