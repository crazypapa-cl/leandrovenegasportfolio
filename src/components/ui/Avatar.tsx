import Image from "next/image";

interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
    size?: number;
}

export function Avatar({ src, alt, className = '', size = 160 }: AvatarProps) {
    return (
        <Image
            src={src}
            alt={alt}
            className={`rounded-full mx-auto grayscale hover:grayscale-0 transition-all duration-300 ${className}`}
            width={size}
            height={size}
            priority
            unoptimized // Keeping this from original, though usually better to optimize if possible
        />
    );
}
