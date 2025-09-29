import { TribeAvatar } from "@/commons/tribe-avatar";
import { TribeCard, TribeCardBody, TribeCardHeader, TribeCardTitle } from "@/commons/tribe-card";
import { TribeVerifyOfficial, TribeVerifyTalent } from "@/commons/tribe-verify";

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
                <TribeVerifyOfficial />
                <TribeVerifyTalent />
            </div>
        </div>
    );
}
