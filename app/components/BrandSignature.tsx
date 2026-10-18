import Image from "next/image";
import { brand } from "../lib/brand";

export default function BrandSignature() {
  return (
    <Image
      src={brand.logo}
      alt={brand.businessName}
      width={2172}
      height={724}
      sizes="(max-width: 639px) 210px, 260px"
      className="h-auto w-[210px] sm:w-[260px]"
    />
  );
}
