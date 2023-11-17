"use server";

import { prisma } from "@/app/lib/db/prisma";

export async function addCount(id: string, likes: number) {
  try {
    await prisma.writing.update({
      where: { id: id },
      data: {
        likes: likes,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
