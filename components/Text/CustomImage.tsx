import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import Image from "next/image";

export const CustomImage = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  const { src, alt } = props;

  if (typeof src !== "string") {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={500}
      height={300}
      layout="responsive"
    />
  );
};
