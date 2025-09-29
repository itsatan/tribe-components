import type { PropsWithChildren } from "react";

export function TribeCardBody({
    children
}: PropsWithChildren) {
    return (
        <div className="w-full h-24 bg-accent rounded-sm animate-pulse">
            {children}
        </div>
    )
}
