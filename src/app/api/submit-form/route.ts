import { NextResponse } from "next/server";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/26303800/ulwpeus/";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Zapier webhook error:", res.status, text);
      return NextResponse.json(
        { error: "Invio fallito" },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit-form API error:", err);
    return NextResponse.json(
      { error: "Errore di connessione" },
      { status: 500 }
    );
  }
}
