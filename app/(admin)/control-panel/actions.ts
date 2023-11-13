"use server";

import { prisma } from "@/app/lib/db/prisma";

export async function editWriting(formData: FormData, id: string) {
  "use server";
  const title = formData.get("title");
  const link = formData.get("link");
  const isPublished = formData.get("isPublished") ? true : false;
  const markdown = formData.get("markdown");
  if (!title) return "no title provided";
  if (!link) return "no link provided";
  if (!markdown) return "no description provided";
  console.log(id, title, link, isPublished, markdown);

  try {
    await prisma.writing.update({
      where: { id: id },
      data: {
        title: title.toString(),
        postId: link.toString(),
        content: markdown.toString(),
        published: isPublished,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error updating writing:", error);
    throw error;
  }
}

// import { redirect } from "next/navigation";

// type FormObject = { [key: string]: string | number | File | File[] };

// /**
//  * Fileの配列かどうかを判定する
//  * @param arr 任意の値
//  */
// export function isArrayOfFiles(arr: unknown): arr is File[] {
//   if (Array.isArray(arr)) {
//     return arr.every((item) => item instanceof File);
//   }
//   return false;
// }

// /**
//  * formDataから全ての値を取得する
//  * @param formData FormData
//  * @param formObject 型情報を含んだ初期値などのオブジェクト
//  * @returns 全ての値が入ったオブジェクト
//  * @todo
//  */
// export const getFormValues = <T extends FormObject>(
//   formData: FormData,
//   formObject: T,
// ) => {
//   return Object.keys(formObject).reduce((acc, key) => {
//     const value = isArrayOfFiles(formObject[key])
//       ? (formData.getAll(key) as File[])
//       : Number.isInteger(formObject[key])
//       ? Number(formData.get(key))
//       : (formData.get(key) as T[typeof key]);
//     return { ...acc, [key]: value };
//   }, {} as T);
// };

// export const addListing = async (
//   formData: FormData,
// ) => {
//   const formValues = getFormValues(formData);
//   redirect(`/add-listing/complete?listing_id=${insertedListing.id}`);
// };
