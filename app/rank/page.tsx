"use client"

import { TribeLevel } from "@/commons/tribe-level"
import { TribeVerify } from "@/commons/tribe-verify"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface TabItem {
    id: string
    label: string
    value: string
}

const tabs: TabItem[] = [
    { id: "1", label: "金币排行", value: "coin" },
    { id: "2", label: "余额排行", value: "balance" },
    { id: "3", label: "累计签到排行", value: "sign" },
    { id: "4", label: "获赞排行", value: "like" },
    { id: "5", label: "会员成长值排行", value: "member" },
    { id: "6", label: "经验排行", value: "exp" },
    { id: "7", label: "粉丝排行", value: "fans" },
    { id: "8", label: "魅力排行", value: "charm" },
    { id: "9", label: "任务排行", value: "task" },
    { id: "10", label: "推广排行", value: "invite" },
]


interface RankBadgeProps {
    text: string;
    color?: string;
}

const RankBadge: React.FC<RankBadgeProps> = ({
    text,
    color = "#ff3b30"
}) => {
    return (
        <span
            className="absolute top-[-5px] right-[-27px] w-[80px] h-[35px] text-white text-[12px] leading-[50px] z-10 text-center shadow-[0_0_5px_#fff] [text-shadow:0_0_15px_#333] rotate-[45deg]"
            style={{ backgroundColor: color }}
        >
            {text}
        </span>
    );
};

interface RankingProps {
    index: number;
    nickname: string;
    coverImage: string;
    color?: string;
}

const Ranking = ({
    index,
    nickname,
    coverImage,
    color,
}: RankingProps) => {
    return (
        <Link
            className="relative block border border-[#f1f1f1] rounded-sm overflow-hidden hover:opacity-70 transition-opacity duration-200"
            href="/"
        >
            <RankBadge text={`TOP ${index}`} color={color} />
            <div className="relative w-full h-[120px]">
                <Image
                    fill
                    src={coverImage}
                    alt="coverImage"
                    className="object-cover"
                    sizes="(max-width: 1200px) 25vw, 300px"
                    priority
                />
                <div className="absolute inset-x-0 bottom-0 top-5 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>
            <div className="relative w-[75px] h-[75px] rounded-full mt-[-50px] mx-auto shadow-[0_0_10px_#fff] z-20">
                <Avatar className="w-full h-full select-none">
                    <AvatarImage
                        className="border border-[#f1f1f1] rounded-full"
                        src="/avatars/1.png"
                        alt="avatar"
                    />
                    <AvatarFallback className="bg-accent animate-pulse" />
                </Avatar>
                <div className="absolute -right-0.5 bottom-0">
                    <TribeVerify variant="member" />
                </div>
            </div>
            <div className="flex flex-col mb-2.5">
                <div className="flex justify-center items-center gap-1 h-[35px]">
                    <div className="text-base text-[#777]">
                        {nickname || "匿名用户"}
                    </div>
                    <TribeLevel variant="official" level={12} />
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm text-[#999]">
                            10393 金币
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

interface RankingCompactProps {
    index: number;
    nickname: string;
    avatarImage: string;
}

const RankingCompact = ({
    index,
    nickname,
    avatarImage,
}: RankingCompactProps) => {
    return (
        <Link
            className="relative flex items-center overflow-hidden hover:opacity-70 transition-opacity duration-200"
            href="/"
        >
            <div className="w-[30px] text-center shrink-0 text-sm text-[#777]">
                {index}.
            </div>
            <div className="relative w-10 h-10 shrink-0">
                <Avatar className="w-full h-full rounded-md select-none">
                    <AvatarImage
                        className="border border-[#eee] rounded-md"
                        src={avatarImage}
                        alt="avatar"
                    />
                    <AvatarFallback className="bg-gray-100 rounded-md animate-pulse" />
                </Avatar>
                <div className="absolute -right-0.5 bottom-0">
                    <TribeVerify variant="member" className="size-3" />
                </div>
            </div>
            <div className="flex-1 min-w-0 px-2">
                <div className="flex items-center gap-1">
                    <div className="text-sm text-[#333] leading-6 truncate">
                        {nickname || "匿名用户"}
                    </div>
                    {index === 5 && (
                        <span className="shrink-0 text-[10px] px-1 bg-[#888888] text-white rounded-xs">
                            BUG
                        </span>
                    )}
                </div>
                <div className="text-xs text-[#666] truncate">
                    <span>15 金币</span>
                </div>
            </div>
        </Link>
    )
}

export default function Rank() {

    const [activeTab, setActiveTab] = useState(tabs[0].value)

    return (
        <div className="w-[1200px] my-5 mx-auto flex flex-col">
            <div className="w-full h-full flex gap-x-[15px]">
                <div className="w-[180px] bg-white rounded-sm p-[15px]">
                    <div className="flex flex-col gap-[15px]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.value)}
                                className={cn(
                                    "w-full h-[35px] text-sm text-center rounded-sm transition-all duration-200 cursor-pointer",
                                    activeTab === tab.value
                                        ? "bg-[#2f363c] text-white"
                                        : "bg-transparent text-[#777] hover:bg-[#2f363c] hover:text-white",
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5 bg-white rounded-sm p-[15px]">
                    <div className="grid grid-cols-4 gap-2.5">
                        <Ranking index={1} nickname="匿名用户" coverImage="/covers/1.png" color="#ff3b30" />
                        <Ranking index={2} nickname="匿名用户" coverImage="/covers/2.jpg" color="#ff9500" />
                        <Ranking index={3} nickname="匿名用户" coverImage="/covers/3.jpg" color="#ffcc00" />
                        <Ranking index={4} nickname="匿名用户" coverImage="/covers/4.jpg" color="#28a745" />
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <RankingCompact index={5} nickname="匿名用户" avatarImage="/avatars/1.png" />
                        <RankingCompact index={6} nickname="匿名用户" avatarImage="/avatars/2.png" />
                        <RankingCompact index={7} nickname="匿名用户" avatarImage="/avatars/3.jpeg" />
                        <RankingCompact index={8} nickname="匿名用户" avatarImage="/avatars/4.jpeg" />
                        <RankingCompact index={9} nickname="匿名用户" avatarImage="/avatars/5.gif" />
                        <RankingCompact index={10} nickname="匿名用户" avatarImage="/avatars/6.jpeg" />
                        <RankingCompact index={11} nickname="匿名用户" avatarImage="/avatars/7.jpeg" />
                        <RankingCompact index={12} nickname="匿名用户" avatarImage="/avatars/8.gif" />
                        <RankingCompact index={13} nickname="匿名用户" avatarImage="/avatars/9.jpg" />
                        <RankingCompact index={14} nickname="匿名用户" avatarImage="/avatars/10.jpeg" />
                        <RankingCompact index={15} nickname="匿名用户" avatarImage="/avatars/11.jpg" />
                        <RankingCompact index={16} nickname="匿名用户" avatarImage="/avatars/12.jpg" />
                        <RankingCompact index={17} nickname="匿名用户" avatarImage="/avatars/13.webp" />
                        <RankingCompact index={18} nickname="匿名用户" avatarImage="/avatars/14.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}