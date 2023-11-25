import { SITE_URL } from "@/app/constants/site";

export async function getOgImage(postId: string) {
  const res = await fetch(`${SITE_URL}/api/og/${postId}`)
    .then((res) => res.blob())
    .then((blob) => URL.createObjectURL(blob));
  return res;
}
