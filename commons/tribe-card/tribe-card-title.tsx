import type { PropsWithChildren } from "react";

export function TribeCardTitle({
    children
}: PropsWithChildren) {
    return (
        <h5 className="pr-4 text-gray-700 font-medium text-base truncate whitespace-nowrap overflow-hidden select-none">
            {children}
        </h5>
    );
}
