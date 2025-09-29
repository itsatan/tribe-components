import { TribeAvatar } from "@/commons/tribe-avatar";
import { TribeButton } from "@/commons/tribe-button";
import { TribeCard, TribeCardBody, TribeCardHeader, TribeCardTitle } from "@/commons/tribe-card";
import { TribeLevel, } from "@/commons/tribe-level";
import { TribeVerify } from "@/commons/tribe-verify";

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
            <div className="flex flex-col gap-4 w-[300px]">
                <TribeAvatar />
                <Card />

                <TribeLevel level={8} variant="official" />
                <TribeLevel level={3} variant="ordinary" />

                <TribeVerify variant="official" />
                <TribeVerify variant="member" />

                <TribeButton>
                    签到
                </TribeButton>
                <TribeButton className="w-15 h-6.5" disabled>
                    发布
                </TribeButton>
            </div>
        </div>
    );
}
