import { NextResponse } from "next/server";

export async function GET() {
    const xy={"abc":"done97097"}
    return NextResponse.json(xy);
}
