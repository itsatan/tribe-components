import { TribeCard, TribeCardBody, TribeCardHeader, TribeCardTitle } from "@/commons/tribe-card";
import Sidebar from "./sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

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

export default function Home() {
    return (
        <div className="flex-1 flex">
            <Sidebar />
            <div className="flex-1 bg-[#0f0f12] px-6 py-5">
                <div
                    className="
                        w-[520px] h-full px-10 bg-[#0f0f12]
                        border-[1px] border-solid
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
                                        className="icon-aLzsXE"
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
                            图片提示词
                        </div>
                        <span className="text-sm text-[#f5fbff] not-italic font-normal leading-[22px]">
                            采用宫崎骏动画标志性的治愈系漫画风格，以俯拍镜头呈现 8k 高清画质，色彩清新且富有童话感。画面中，小女孩与巨大龙猫惬意躺在木筏上，顺清澈溪流漂浮。女孩穿黄色上衣、蓝短裤，赤脚放松；龙猫憨态可掬，灰蓝皮毛与白腹对比柔和。周围是茂密绿植、垂坠紫藤花，溪水泛着透亮蓝，光影透过树叶洒下，营造出宁静、梦幻的自然氛围，色调温暖治愈，满是纯真美好的童话意境 。
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
                </div>
            </div>
        </div>
    );
}
