import type { PropsWithChildren } from "react";

export function TribeCard({
    children
}: PropsWithChildren) {
    return (
        <div className="flex flex-col gap-2 bg-white p-3 rounded-sm">
            {children}
        </div>
    );
}
