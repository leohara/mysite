import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const bookmarks = await prisma.bookmark.findMany();
  return NextResponse.json(bookmarks);
}