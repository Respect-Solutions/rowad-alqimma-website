import Image from "next/image";
import { assets } from "@/lib/assets";

type AssetKey = keyof typeof assets;

type IconImageProps = {
  name: AssetKey;
  alt?: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
};

export function IconImage({ name, alt = "", size = 24, width, height, className = "" }: IconImageProps) {
  return (
    <Image
      alt={alt}
      className={className}
      height={height ?? size}
      src={assets[name]}
      unoptimized
      width={width ?? size}
    />
  );
}
