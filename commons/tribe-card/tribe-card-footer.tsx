import type { PropsWithChildren } from "react";

export function TribeCardFooter({
    children
}: PropsWithChildren) {
    return (
        <div className="flex items-center">
            {children}
        </div>
    )
}
