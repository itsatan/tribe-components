import type { PropsWithChildren } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TribeAvatar({
    children
}: PropsWithChildren) {
    return (
        <Avatar className="size-12 rounded-sm select-none">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback className="bg-accent rounded-sm animate-pulse" />
            {children}
        </Avatar>
    )
}
