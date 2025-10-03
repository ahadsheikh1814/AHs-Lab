import { readFile } from "@/lib/readFile";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      { error: "Path parameter is required" },
      { status: 400 }
    );
  }

  try {
    const code = readFile(path);
    
    if (code === null) {
      return NextResponse.json(
        { error: "File not found or could not be read" },
        { status: 404 }
      );
    }

    return NextResponse.json({ code });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json(
      { error: "Failed to read file" },
      { status: 500 }
    );
  }
}

// Force this route to be dynamic
export const dynamic = "force-dynamic";