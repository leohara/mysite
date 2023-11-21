"use server";

import { prisma } from "@/app/lib/db/prisma";
import { redirect } from "next/navigation";

async function getWriting(id: string) {
  return await prisma.writing.findUnique({
    where: { id: id },
  });
}

export async function addWriting(formData: FormData) {
  const title = formData.get("title");
  const link = formData.get("link");
  const isPublished = !!formData.get("isPublished");
  const markdown = formData.get("markdown");
  if (!title)
    return {
      error: "タイトルを入力してください",
    };
  if (!link)
    return {
      error: "リンクを設定してください",
    };
  if (!markdown)
    return {
      error: "最低でも1文字以上の本文を入力してください",
    };

  try {
    await prisma.writing.create({
      data: {
        title: title.toString(),
        postId: link.toString(),
        content: markdown.toString(),
        published: isPublished,
        publishedAt: isPublished ? new Date() : null,
      },
    });
  } catch (error) {
    return {
      error: "保存できませんでした",
    };
  }
  redirect("/control-panel");
}

export async function editWriting(formData: FormData, id: string) {
  const title = formData.get("title");
  const link = formData.get("link");
  const isPublished = !!formData.get("isPublished");
  console.log("isPublished", isPublished);
  const markdown = formData.get("markdown");
  const writing = await getWriting(id);
  const publishedAt = writing?.publishedAt;
  console.log("isPublished", isPublished);
  console.log("publishedAt", publishedAt);
  if (!title)
    return {
      error: "タイトルを入力してください",
    };
  if (!link)
    return {
      error: "リンクを設定してください",
    };
  if (!markdown)
    return {
      error: "最低でも1文字以上の本文を入力してください",
    };

  try {
    await prisma.writing.update({
      where: { id: id },
      data: {
        title: title.toString(),
        postId: link.toString(),
        content: markdown.toString(),
        published: isPublished,
        updatedAt: new Date(),
        publishedAt: isPublished && !publishedAt ? new Date() : null,
      },
    });
  } catch (error) {
    return {
      error: "保存できませんでした",
    };
  }
  redirect(`/control-panel/edit/${link}`);
}

export async function deleteWriting(formData: FormData) {
  const id = formData.get("delete");
  if (!id)
    return {
      error: "問題が発生しました",
    };
  try {
    await prisma.writing.delete({
      where: {
        id: id.toString(),
      },
    });
  } catch (error) {
    return {
      error: "問題が発生しました",
    };
  }
  redirect("/control-panel");
}
