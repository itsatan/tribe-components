import { TribeVerify } from "./tribe-verify";

type TribeVerifyOfficialProps = {
    alt?: string;
};

export function TribeVerifyOfficial({
    alt = "官方认证"
}: TribeVerifyOfficialProps) {
    return (
        <TribeVerify
            src="/icons/verify/verify-official.svg"
            alt={alt}
        />
    );
}
