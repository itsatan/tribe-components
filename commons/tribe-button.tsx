import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const tribeButtonVariants = cva(
    `
    flex justify-center items-center gap-1 shrink-0 rounded-sm
    transition-all duration-300 ease-[cubic-bezier(.645,.045,.355,1)]
    whitespace-nowrap cursor-pointer select-none
    `,
    {
        variants: {
            variant: {
                default: "bg-[#2f363c] text-white hover:opacity-70",
                outline: "bg-white border border-solid border-[#2f363c] text-[#2f363c] pointer-events-none",
                ghost: "bg-transparent text-[#2f363c]",
            },
            size: {
                sm: "text-sm w-[60px] h-[26px]",
                md: "text-sm px-5 min-w-[68px] h-[32px]",
            },
            disabled: {
                true: "opacity-40 pointer-events-none",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
            disabled: false,
        },
    }
);

export interface TribeButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof tribeButtonVariants> {
    disabled?: boolean;
}

export function TribeButton({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}: TribeButtonProps) {
    return (
        <button
            className={cn(tribeButtonVariants({ variant, size, disabled }), className)}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}


// import { cn } from "@/lib/utils";
// import { cva, type VariantProps } from "class-variance-authority";
// import type { ButtonHTMLAttributes } from "react";

// const tribeButtonVariants = cva(
//     `
//   inline-flex items-center justify-center gap-1 shrink-0 rounded-sm
//   transition-all duration-300 ease-[cubic-bezier(.645,.045,.355,1)]
//   whitespace-nowrap cursor-pointer select-none font-medium
//   `,
//     {
//         variants: {
//             variant: {
//                 default: "bg-[#2f363c] text-white hover:opacity-70",
//                 outline: "bg-white border border-[#2f363c] text-[#2f363c] hover:bg-gray-50",
//                 ghost: "bg-transparent text-[#2f363c] hover:bg-gray-100",
//             },
//             size: {
//                 sm: "text-xs px-2.5 h-[26px] min-w-[60px]",
//                 md: "text-sm px-4 h-[32px] min-w-[68px]",
//                 lg: "text-base px-5 h-[38px] min-w-[80px]",
//             },
//             disabled: {
//                 true: "opacity-40 pointer-events-none",
//                 false: "",
//             },
//         },
//         defaultVariants: {
//             variant: "default",
//             size: "md",
//             disabled: false,
//         },
//     }
// );

// export interface TribeButtonProps
//     extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
//     VariantProps<typeof tribeButtonVariants> {
//     disabled?: boolean;
// }
// /**
//  * ✅ TribeButton
//  * - 支持 variant / size / disabled 三个变体
//  * - 保持最小宽高，但仍可通过 className 自定义
//  * - 使用 <button> 标签以获得原生交互与无障碍特性
//  */
// export function TribeButton({
//     variant,
//     size,
//     disabled,
//     className,
//     children,
//     ...props
// }: TribeButtonProps) {
//     return (
//         <button
//             className={cn(tribeButtonVariants({ variant, size, disabled }), className)}
//             disabled={disabled}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// }
