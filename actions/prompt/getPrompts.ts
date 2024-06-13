import { NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";

export async function GetPrompts() {
  try {
    const prompts = await prisma.prompts.findMany();

    return prompts;
  } catch (error) {
    console.log("Error while getting prompts", error);
  }
}
