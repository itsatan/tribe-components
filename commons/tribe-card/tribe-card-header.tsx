import type { PropsWithChildren } from "react";

export function TribeCardHeader({
    children
}: PropsWithChildren) {
    return (
        <div className="relative flex items-center pl-6">
            {/* before */}
            <span className="absolute left-0.5 w-[3px] h-[15px] bg-[#ff5473] rotate-[15deg] rounded-sm" />
            {/* after */}
            <span className="absolute left-2.5 w-[3px] h-3 bg-[#2196f3] rotate-[15deg] rounded-sm" />
            {children}
        </div>
    );
}
