"use server";

import { prisma } from "@/app/lib/db/prisma";

export async function editWriting(formData: FormData, id: string) {
  const title = formData.get("title");
  const link = formData.get("link");
  const isPublished = !!formData.get("isPublished");
  const markdown = formData.get("markdown");
  if (!title) return "no title provided";
  if (!link) return "no link provided";
  if (!markdown) return "no description provided";

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
