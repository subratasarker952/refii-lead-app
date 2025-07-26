// app/api/import-lead/route.ts

// app/api/import-lead/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const effiResponse = await fetch("https://partner-api.effi.com.au/api/Leads/Import/3.0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_EFFI_API_KEY!,
      },
      body: JSON.stringify(body),
    });

    const data = await effiResponse.json();

    if (!effiResponse.ok) {
      console.error("❌ Effi API error:", data);
      return NextResponse.json({ error: "Effi API failed", details: data }, { status: effiResponse.status });
    }

    console.log("✅ Lead created:", data);
    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    console.error("❌ Internal Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
  }
}
