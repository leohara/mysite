import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const writings = await prisma.writing.findMany();
  return NextResponse.json(writings);
}