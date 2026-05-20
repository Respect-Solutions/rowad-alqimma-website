import Image from "next/image";
import { assets } from "@/lib/assets";

type AssetKey = keyof typeof assets;

type IconImageProps = {
  name: AssetKey;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
};

export function IconImage({ name, size = 24, width, height, className = "" }: IconImageProps) {
  return (
    <Image
      alt=""
      className={className}
      height={height ?? size}
      src='/assets/navLogo.png'
      unoptimized
      width={width ?? size}
    />
  );
}
