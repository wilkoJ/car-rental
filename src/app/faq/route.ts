import data from "../../../faq.json";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ data });
}
