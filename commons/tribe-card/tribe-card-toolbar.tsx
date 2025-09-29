import type { PropsWithChildren } from "react";

export function TribeCardToolbar({
    children
}: PropsWithChildren) {
    return (
        <div className="ml-auto shrink-0">
            {children}
        </div>
    );
}
