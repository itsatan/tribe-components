import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tribeVerifyVariants = cva(
    "w-[14px] h-[14px] rounded-full overflow-hidden flex items-center justify-center select-none",
    {
        variants: {
            variant: {
                official: "",
                member: "",
            },
        },
        defaultVariants: {
            variant: "member",
        },
    }
);

interface TribeVerifyProps extends VariantProps<typeof tribeVerifyVariants> {
    variant: "official" | "member";
    className?: string;
}

const variantConfig: Record<"official" | "member", { src: string; alt: string }> = {
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
    className
}: TribeVerifyProps) {

    const { src, alt } = variantConfig[variant];

    return (
        <div className={cn(tribeVerifyVariants({ variant }), className)}>
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
