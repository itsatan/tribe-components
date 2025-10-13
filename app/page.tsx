import { TribeButton } from "@/commons/tribe-button";
import { TribeCard, TribeCardBody, TribeCardHeader, TribeCardTitle } from "@/commons/tribe-card";
import { Loader2 } from "lucide-react";

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
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            {/* <div className="flex flex-wrap items-center gap-[10px] bg-white rounded-sm p-4 overflow-hidden">
                <TribeButton variant="primary" className="w-[62px]">
                    全部
                </TribeButton>
                <TribeButton className="w-[62px]">
                    瀑布流
                </TribeButton>
                <TribeButton className="w-[62px]">
                    抢沙发
                </TribeButton>
                <TribeButton className="w-[62px]">
                    动态
                </TribeButton>
                <TribeButton className="w-[62px]">
                    长文章
                </TribeButton>
                <TribeButton className="w-[62px]">
                    视频
                </TribeButton>
                <TribeButton className="w-[62px]">
                    音乐
                </TribeButton>
            </div> */}
            <TribeButton size="sm">
                发布
            </TribeButton>
            <TribeButton variant="ghost" size="sm">
                发布
            </TribeButton>
            <TribeButton size="sm" disabled>
                发布
            </TribeButton>
            <TribeButton>
                领取
            </TribeButton>
            <TribeButton variant="outline">
                已签到
            </TribeButton>
            <TribeButton variant="outline">
                <Loader2 className="size-4 animate-spin" /> 已领
            </TribeButton>
        </div>
    );
}
