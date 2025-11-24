"use client"

import React from "react";
import { TribeCard, TribeCardBody, TribeCardHeader, TribeCardTitle } from "@/commons/tribe-card";
// import Sidebar from "./sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Card() {
    return (
        <TribeCard>
            <TribeCardHeader >
                <TribeCardTitle>
                    HotCircle
                </TribeCardTitle>
            </TribeCardHeader>
            <TribeCardBody />
        </TribeCard>
    )
}

interface ImagePreviewProps {
    src: string;
    alt?: string;
    aspect?: "square" | "video";
    className?: string;
}

export const ImagePreview = ({
    src,
    alt = "image",
    aspect = "video",
    className,
}: ImagePreviewProps) => {

    const [loaded, setLoaded] = React.useState(false);

    return (
        <div
            className={cn(
                "relative bg-transparent overflow-hidden rounded-sm transition-all hover:opacity-90 cursor-pointer select-none",
                aspect === "square" && "aspect-square",
                aspect === "video" && "aspect-video",
                className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-sm bg-muted transition-opacity duration-300",
                    loaded ? "opacity-0" : "opacity-100"
                )}
            />
            <Image
                src={src.startsWith("/public") ? src.replace("/public", "") : src}
                alt={alt}
                fill
                className={cn(
                    "object-cover rounded-sm transition-opacity duration-300 will-change-transform",
                    loaded ? "opacity-100" : "opacity-0"
                )}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 20vw"
            />
        </div>
    );
};

export const PreviewArea = () => {
    return (
        <div
            className="
                w-[820px] bg-[#1a1a1f] rounded-sm
                transition-[width,transform,max-width]
                duration-[500ms,300ms,500ms]
                ease-[cubic-bezier(.4,0,.2,1)]
            ">
        </div>
    )
}

export const CoreArea = () => {
    return (
        <div
            className="
                flex-1 pl-10 pr-6 bg-[#0f0f12]
                border
                [border-image-outset:0]
                [border-image-repeat:stretch]
                [border-image-slice:1]
                [border-image-source:linear-gradient(180deg,hsla(0,0%,100%,0)_-1.77%,rgba(215,218,224,.15)_23.67%,rgba(183,189,200,.276)_49.12%,rgba(170,177,190,.15)_74.56%,rgba(122,133,153,0))]
                [border-image-width:1px_0_1px_1px]
                mr-1
                overflow-y-auto
                right-0
                [scrollbar-gutter:stable]
                [scrollbar-width:auto]
                transition-[width,transform,max-width]
                duration-[500ms,300ms,500ms]
                ease-[cubic-bezier(.4,0,.2,1)]
            "
        >
            <div className="flex flex-col gap-4 pt-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <Avatar className="w-5 h-5 select-none">
                                <AvatarImage
                                    src="/avatars/1.png"
                                    alt="avatar"
                                />
                                <AvatarFallback className="bg-accent animate-pulse" />
                            </Avatar>
                            <div className="shrink-0 min-w-[48px] max-w-[190px] text-sm text-[#f5fbff] font-medium truncate">
                                @HotCircle
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-0.5 min-w-[48px] h-6 px-1.5 bg-[rgba(204,221,255,.08)] text-[10px] text-[#f5fbff] font-semibold rounded cursor-pointer hover:bg-[rgba(204,221,255,.12)]">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                fill="none"
                                role="presentation"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                            >
                                <g>
                                    <path
                                        data-follow-fill="currentColor"
                                        d="M10.8 20a1.2 1.2 0 0 0 2.4 0v-6.8H20a1.2 1.2 0 1 0 0-2.4h-6.8V4a1.2 1.2 0 0 0-2.4 0v6.8H4a1.2 1.2 0 0 0 0 2.4h6.8V20Z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        fill="currentColor" />
                                </g>
                            </svg>
                            关注
                        </div>
                    </div>
                    <div
                        className="
                            flex justify-center items-center gap-0.5 cursor-pointer pointer-events-auto
                            group transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                        "
                    >
                        <div
                            className="
                                flex justify-center items-center w-5 h-5 text-[#f5fbff]
                                group-hover:text-red-500 group-hover:scale-105 transition-colors duration-300
                            "
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                fill="none"
                                role="presentation"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                            >
                                <g>
                                    <path
                                        data-follow-fill="currentColor"
                                        d="M8.538 3.513a6.077 6.077 0 0 0-6.085 6.07c0 2.819 1.639 5.278 3.37 7.025 1.75 1.764 3.914 3.13 5.588 3.685a1.87 1.87 0 0 0 1.174 0c1.675-.556 3.84-1.92 5.588-3.685 1.732-1.747 3.37-4.206 3.37-7.025a6.077 6.077 0 0 0-6.084-6.07c-1.381 0-2.572.717-3.46 1.432-.889-.715-2.08-1.432-3.461-1.432Zm0 2a4.077 4.077 0 0 0-4.085 4.07c0 2.05 1.215 4.028 2.79 5.617 1.557 1.57 3.436 2.73 4.755 3.18 1.32-.45 3.2-1.61 4.755-3.18 1.575-1.59 2.79-3.568 2.79-5.617 0-2.24-1.82-4.07-4.084-4.07-.929 0-1.877.652-2.78 1.49a1 1 0 0 1-1.36 0c-.904-.838-1.853-1.49-2.781-1.49Z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        fill="currentColor"
                                    />
                                </g>
                            </svg>
                        </div>
                        <span
                            className="
                                font-['Montserrat'] text-sm text-[#f5fbff]
                                text-shadow-[0_.5px_.5px_rgba(0,0,0,.2)]
                                font-medium leading-normal
                                group-hover:text-red-500 transition-colors duration-300
                            "
                        >
                            21
                        </span>
                    </div>
                </div>
                <div className="flex items-start self-stretch">
                    <div className="flex items-center">
                        <div className="text-xs font-normal leading-5 text-[rgba(224,245,255,.6)]">
                            2025-10-21
                        </div>
                        <div className="inline-flex items-center text-xs font-normal leading-5 text-[rgba(224,245,255,.6)] before:content-[''] before:inline-block before:h-2.5 before:w-[1px] before:bg-[rgba(224,245,255,.2)] before:mx-2">
                            内容由 AI 生成
                        </div>
                    </div>
                </div>
                <div className="w-full h-[.5px] bg-[rgba(204,221,255,.12)]" />
            </div>
            <div className="flex flex-col gap-2 py-5">
                <div className="text-sm text-[rgba(224,245,255,.48)] not-italic font-normal leading-[22px]">
                    {/* 宫崎骏风格 */}
                    第 <span>1</span> 步 图片生成
                </div>
                <span className="text-sm text-[#f5fbff] not-italic font-normal leading-6">
                    采用宫崎骏动画标志性的治愈系漫画风格，以俯拍镜头呈现 8k 高清画质，色彩清新且富有童话感。画面中，小女孩穿着黄色衣服，蓝色短裤，夏天，龙猫带着小女孩飞到屋顶瓦上，跟小龙猫一起坐着看着天空，温馨画面，营造出宁静、梦幻的自然氛围，色调温暖治愈，满是纯真美好的童话意境 。
                </span>
                <div className="flex items-center gap-3 text-sm text-[rgba(224,245,255,.48)]">
                    <div className="cursor-pointer">
                        图片 3.0
                    </div>
                    <span className="w-[1px] h-2.5 rounded-full bg-[rgba(224,245,255,.2)]" />
                    <div className="cursor-pointer">
                        9:16
                    </div>
                    <span className="w-[1px] h-2.5 rounded-full bg-[rgba(224,245,255,.2)]" />
                    <div className="cursor-pointer">
                        详细信息
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                <ImagePreview src="/covers/1.png" />
                <ImagePreview src="/covers/2.jpg" />
                <ImagePreview src="/covers/3.jpg" />
                <ImagePreview src="/covers/4.jpg" />
                <ImagePreview src="/covers/5.jpg" />
                <ImagePreview src="/covers/6.jpg" />
                <ImagePreview src="/covers/7.png" />
                <ImagePreview src="/covers/8.png" />
                <ImagePreview src="/covers/9.png" />
                <ImagePreview src="/covers/10.png" />
                <ImagePreview src="/covers/11.png" />
            </div>
        </div>
    )
}

export const OperationArea = () => {
    return (
        <div className="relative flex flex-col justify-end w-10 py-4">
            <div className="absolute top-2 left-0 flex flex-col gap-2">
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M19.579 6.119a1.2 1.2 0 0 0-1.697-1.698L12 10.303 6.12 4.422a1.2 1.2 0 1 0-1.697 1.697L10.303 12l-5.881 5.882a1.2 1.2 0 0 0 1.697 1.697L12 13.698l5.882 5.882a1.2 1.2 0 1 0 1.697-1.697L13.697 12l5.882-5.882Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M5 6.3a1.2 1.2 0 0 0 0 2.4h14a1.2 1.2 0 1 0 0-2.4H5Zm0 9a1.2 1.2 0 0 0 0 2.4h8a1.2 1.2 0 1 0 0-2.4H5Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M7 12a1 1 0 0 1 1-1h10.312L14.29 6.977a1 1 0 0 1 1.414-1.414l5.728 5.73a1 1 0 0 1 0 1.414l-5.728 5.73a1 1 0 1 1-1.414-1.414L18.31 13H8a1 1 0 0 1-1-1Zm-2.998 9a1 1 0 0 1-1-1L3 4a1 1 0 1 1 2 0l.002 16a1 1 0 0 1-1 1Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M6.938 3.125a1 1 0 0 1 1 1v1.813h8.125V4.125a1 1 0 1 1 2 0v1.813h1.812a1 1 0 1 1 0 2h-1.813v2.937a1 1 0 1 1-2 0V7.937H7.938v8.125h2.938a1 1 0 1 1 0 2H7.937v1.813a1 1 0 1 1-2 0v-1.813H4.125a1 1 0 1 1 0-2h1.813V7.938H4.125a1 1 0 0 1 0-2h1.813V4.125a1 1 0 0 1 1-1Zm10.518 17.363.208-.477a3.68 3.68 0 0 1 1.871-1.898l.641-.285a.447.447 0 0 0 0-.812l-.605-.27a3.682 3.682 0 0 1-1.898-1.961l-.213-.515a.427.427 0 0 0-.794 0l-.214.515a3.682 3.682 0 0 1-1.898 1.962l-.605.269a.447.447 0 0 0 0 .812l.64.285a3.675 3.675 0 0 1 1.872 1.898l.208.477c.152.35.635.35.787 0Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M11.45 5.698a1.371 1.371 0 1 1 0-2.742 1.371 1.371 0 0 1 0 2.742Zm0 1.837a3.208 3.208 0 1 1 0-6.416 3.208 3.208 0 0 1 0 6.416Zm7.068 13.633-.226.518a.464.464 0 0 1-.855 0l-.226-.518a3.998 3.998 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.882l.657-.293a4.001 4.001 0 0 0 2.063-2.132l.232-.56a.464.464 0 0 1 .863 0l.232.56a4.001 4.001 0 0 0 2.063 2.132l.657.293a.486.486 0 0 1 0 .882l-.696.31a3.998 3.998 0 0 0-2.034 2.063ZM6.062 7.006c-1.061-.801-2.583-.69-3.457.399-.737.918-.781 2.323.163 3.22a13.578 13.578 0 0 0 3.09 2.216c.585.3.89.849.836 1.335l-.754 6.926a.918.918 0 1 0 1.826.198l.754-6.925c.153-1.403-.717-2.599-1.823-3.168a11.745 11.745 0 0 1-2.664-1.913c-.163-.155-.215-.466.004-.74.211-.262.596-.326.918-.082 1.323.999 3.415 2.235 6.515 2.235 3.131 0 5.187-1.086 6.56-2.086.34-.248.738-.172.936.073.194.24.142.473.046.576a9.124 9.124 0 0 1-4.108 2.499.918.918 0 1 0 .504 1.766 10.958 10.958 0 0 0 4.95-3.016c.827-.89.696-2.163.038-2.979-.878-1.087-2.402-1.165-3.447-.404-1.143.833-2.828 1.734-5.48 1.734-2.559 0-4.27-1.004-5.407-1.864Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M11.805 5.786c1.25-.926 2.193-1.373 2.471-1.096.489.488-1.261 3.03-3.909 5.677-4.33 4.331-6.715 8.968-5.326 10.358.29.29.723.416 1.264.394.421.017.92-.07 1.48-.249-2.117.9-3.859 1.005-4.76.104-1.874-1.874.61-7.402 5.553-12.353l.022-.02c.03-.032.062-.063.093-.094l.065-.064.11-.108c.97-.95 1.96-1.804 2.937-2.549Zm5.55 11.57c1.532-1.531 3.2-2.347 3.725-1.822.525.525-.29 2.192-1.822 3.724-1.532 1.531-3.2 2.347-3.725 1.822-.524-.525.291-2.192 1.822-3.724ZM16.217 3.13c2.116-.9 3.858-1.005 4.759-.105 1.874 1.875-.612 7.402-5.554 12.353l-.022.021c-.03.032-.062.062-.093.093l-.064.065-.11.108c-.97.949-1.96 1.803-2.938 2.548-1.25.926-2.193 1.374-2.471 1.096-.489-.487 1.262-3.029 3.91-5.676 4.331-4.332 6.715-8.97 5.325-10.36-.29-.29-.722-.414-1.263-.392-.421-.017-.92.069-1.48.249ZM4.742 4.74C6.274 3.21 7.94 2.394 8.466 2.92c.525.525-.29 2.193-1.822 3.724C5.112 8.175 3.445 8.99 2.92 8.466c-.525-.525.29-2.193 1.822-3.725Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M18.176 15.77a.427.427 0 0 1 .794 0l.214.515a3.683 3.683 0 0 0 1.898 1.962l.604.269a.448.448 0 0 1 0 .812l-.64.284a3.68 3.68 0 0 0-1.871 1.899l-.208.477a.427.427 0 0 1-.787 0l-.208-.477a3.68 3.68 0 0 0-1.871-1.899l-.641-.284a.448.448 0 0 1 0-.812l.604-.269a3.683 3.683 0 0 0 1.899-1.962l.213-.515ZM15.5 2a1 1 0 0 1 1 1v.5h1a4 4 0 0 1 4 4V13h-2v-1.5h-15v6a2 2 0 0 0 2 2h6v2h-6a4 4 0 0 1-4-4v-10a4 4 0 0 1 4-4h1V3a1 1 0 0 1 2 0v.5h5V3a1 1 0 0 1 1-1Zm-9 3.5a2 2 0 0 0-2 2v2h15v-2a2 2 0 0 0-2-2h-1V6a1 1 0 1 1-2 0v-.5h-5V6a1 1 0 0 1-2 0v-.5h-1Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-8h3a1 1 0 1 1 0 2h-3.588c-.78 0-1.412-.632-1.412-1.412V8a1 1 0 1 1 2 0v4Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M16.326 4.72H7.674A2.954 2.954 0 0 0 4.72 7.674v8.652c0 .054.001.108.004.162l3.509-3.508a2.954 2.954 0 0 1 4.03-.138l6.262 5.457c.47-.523.755-1.215.755-1.973V7.674a2.954 2.954 0 0 0-2.954-2.954Zm2.798 15.658a4.919 4.919 0 0 0 2.126-4.052V7.674a4.924 4.924 0 0 0-4.924-4.924H7.674A4.924 4.924 0 0 0 2.75 7.674v8.652a4.924 4.924 0 0 0 4.924 4.924h8.652a4.901 4.901 0 0 0 2.798-.872Zm-2.489-1.114-5.666-4.937a.985.985 0 0 0-1.344.046l-4.041 4.04a2.945 2.945 0 0 0 2.09.867h8.652c.104 0 .208-.005.31-.016ZM14.078 8.401a1.532 1.532 0 1 1 3.064 0 1.532 1.532 0 0 1-3.064 0Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M6.503 6.005a.6.6 0 0 1 .58.448L9.901 17.25a.6.6 0 0 1-.58.751h-.994a.6.6 0 0 1-.58-.448l-.385-1.472H4.478l-.384 1.472a.6.6 0 0 1-.58.448H2.52a.6.6 0 0 1-.581-.751l2.82-10.797a.6.6 0 0 1 .58-.448h1.164ZM14.321 6a4.081 4.081 0 0 1 0 8.161h-.72v3.24a.6.6 0 0 1-.599.599h-.96a.6.6 0 0 1-.6-.6V6.6a.6.6 0 0 1 .6-.6h2.28Zm7.16-.005c.33 0 .6.27.6.6v10.8a.6.6 0 0 1-.6.6h-.961a.6.6 0 0 1-.6-.6v-10.8a.6.6 0 0 1 .6-.6h.96ZM5.041 13.92h1.757l-.879-3.364-.878 3.364Zm8.56-1.92h.72a1.92 1.92 0 1 0 0-3.839h-.72V12Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm8.825 4.897a1.175 1.175 0 1 1 2.35 0 1.175 1.175 0 0 1-2.35 0ZM12 6.11c-.477 0-.95.09-1.395.263-.443.173-.85.43-1.195.755a3.538 3.538 0 0 0-.813 1.15c-.205.468-.289 1.049-.289 1.481a1 1 0 0 0 2 0c0-.235.055-.527.12-.677.081-.184.2-.354.355-.5a1.72 1.72 0 0 1 .551-.347 1.83 1.83 0 0 1 1.332 0c.21.082.396.2.55.347.155.146.275.316.355.5.08.183.12.377.12.571 0 .439-.108.662-.22.811-.139.185-.339.336-.686.572l-.066.044c-.302.204-.736.496-1.074.912-.403.495-.645 1.12-.645 1.923a1 1 0 0 0 2 0c0-.362.095-.536.196-.66.141-.174.34-.313.711-.564l.008-.005c.325-.22.793-.538 1.156-1.022.393-.524.62-1.178.62-2.01 0-.474-.098-.941-.288-1.375a3.538 3.538 0 0 0-.813-1.15 3.708 3.708 0 0 0-1.195-.756A3.829 3.829 0 0 0 12 6.11Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M21.01 16.018a1.2 1.2 0 0 0-.01-1.697l-8.156-8.06a1.2 1.2 0 0 0-1.688 0L3 14.32a1.2 1.2 0 0 0 1.687 1.707L12 8.801l7.313 7.227a1.2 1.2 0 0 0 1.697-.01Z"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-transparent hover:bg-[#202127b8] rounded-sm cursor-pointer">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-xl text-[#f5fbff] leading-none"
                    >
                        <g>
                            <path
                                data-follow-fill="currentColor"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M21.01 7.982A1.2 1.2 0 0 1 21 9.679l-8.156 8.06a1.2 1.2 0 0 1-1.688 0L3 9.68a1.2 1.2 0 0 1 1.687-1.707L12 15.199l7.313-7.227a1.2 1.2 0 0 1 1.697.01Z"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="flex-1 flex bg-[#0f0f12]">
            {/* <Sidebar /> */}
            <div className="flex-1 flex gap-4 bg-[#0f0f12] pl-6 py-5">
                <PreviewArea />
                <OperationArea />
                <CoreArea />
            </div>
        </div>
    );
}
