import { TribeVerify } from "./tribe-verify";

type TribeVerifyTalentProps = {
    alt?: string;
};

export function TribeVerifyTalent({
    alt = "达人认证"
}: TribeVerifyTalentProps) {
    return (
        <TribeVerify
            src="/icons/verify/verify-talent.svg"
            alt={alt}
        />
    );
}
