import { NextResponse } from "next/server";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/26303800/ulwpeus/";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Payload strutturato: utm_campaign e utm_content sempre come due campi separati (mai "utm")
    const payload: Record<string, string> = {
      "name-surname": String(body["name-surname"] ?? ""),
      "nome-azienda": String(body["nome-azienda"] ?? ""),
      "ha-sito": String(body["ha-sito"] ?? ""),
      telefono: String(body.telefono ?? ""),
      email: String(body.email ?? ""),
      obbiettivo: String(body.obbiettivo ?? ""),
      utm_campaign: String(body.utm_campaign ?? "none"),
      utm_content: String(body.utm_content ?? "none"),
    };

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {},
      body: JSON.stringify(payload),
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
