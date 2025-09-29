import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface TribeButtonProps extends PropsWithChildren {
    className?: string;
    disabled?: boolean;
}

export function TribeButton({
    className,
    disabled = false,
    children,
}: TribeButtonProps) {
    return (
        <div
            className={cn(`
                inline-flex items-center justify-center gap-2 shrink-0 rounded-sm cursor-pointer transition-all duration-300 ease-[cubic-bezier(.645,.045,.355,1)] select-none
                w-17 h-7.5 text-sm leading-7.5 bg-[#2f363c] text-white
            `,
                disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:opacity-70 hover:text-white",
                className,
            )}
        >
            {children}
        </div>
    );
}
