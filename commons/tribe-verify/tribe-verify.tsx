import Image from "next/image";

type TribeVerifyProps = {
    src: string;
    alt?: string;
};

export function TribeVerify({
    src,
    alt = "认证标记"
}: TribeVerifyProps) {
    return (
        <div className="w-[14px] h-[14px] rounded-full overflow-hidden flex items-center justify-center">
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
