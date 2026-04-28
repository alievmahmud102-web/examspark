export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      contact?: string;
      lang?: string;
    };

    const name = (body.name ?? "").trim();
    const contact = (body.contact ?? "").trim();

    if (!name) {
      return Response.json({ error: "Name is required." }, { status: 400 });
    }

    if (!contact || contact.length < 5) {
      return Response.json(
        { error: "Contact must be at least 5 characters." },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return Response.json(
        {
          error:
            "Telegram is not configured. Set TELEGRAM_TOKEN and TELEGRAM_CHAT_ID in environment variables.",
        },
        { status: 500 },
      );
    }

    const lang = (body.lang ?? "ru").toUpperCase();
    const text = [
      "📩 New lead",
      "",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Lang: ${lang}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      },
    );

    if (!telegramResponse.ok) {
      const details = await telegramResponse.text().catch(() => "");
      return Response.json(
        {
          error: "Failed to send message to Telegram.",
          details,
          status: telegramResponse.status,
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        error: "Unexpected server error.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

