import Image from "next/image";
import { brand } from "../lib/brand";

export default function BrandSignature() {
  return (
    <Image
      src={brand.logo}
      alt="Móia Advogados"
      width={1983}
      height={793}
      sizes="(max-width: 639px) 190px, 220px"
      className="h-auto w-[190px] sm:w-[220px]"
    />
  );
}
