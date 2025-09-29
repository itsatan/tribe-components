import Image from "next/image";
import { cn } from "@/lib/utils";

type TribeVerifyVariant = "official" | "member";

type TribeVerifyProps = {
    variant: TribeVerifyVariant;
    className?: string;
};

const variantConfig: Record<TribeVerifyVariant, { src: string; alt: string }> = {
    official: {
        src: "/icons/verify/verify-official.svg",
        alt: "官方认证",
    },
    member: {
        src: "/icons/verify/verify-member.svg",
        alt: "成员认证",
    },
};

export function TribeVerify({
    variant,
    className,
}: TribeVerifyProps) {

    const { src, alt } = variantConfig[variant];

    return (
        <div className={cn('w-[14px] h-[14px] rounded-full overflow-hidden flex items-center justify-center select-none', className)}>
            <Image
                src={src}
                alt={alt}
                width={14}
                height={14}
                className="w-full h-full"
            />
        </div>
    );
}
