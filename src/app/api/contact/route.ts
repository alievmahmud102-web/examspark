import https from "node:https";

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function sendTelegramMessage(token: string, chatId: string, text: string) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const body = JSON.stringify({
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  });

  let lastFetchError: unknown;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const telegramResponse = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body,
      });

      if (!telegramResponse.ok) {
        const details = await telegramResponse.text().catch(() => "");
        return {
          ok: false as const,
          kind: "telegram_http_error" as const,
          status: telegramResponse.status,
          details,
        };
      }

      return { ok: true as const };
    } catch (error) {
      lastFetchError = error;
      await sleep(250 * 2 ** attempt);
    }
  }

  try {
    const httpsResult = await new Promise<{ ok: boolean; status: number; body: string }>(
      (resolve, reject) => {
        const req = https.request(
          url,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "content-length": Buffer.byteLength(body),
            },
          },
          (res) => {
            const chunks: Buffer[] = [];
            res.on("data", (chunk) => chunks.push(chunk as Buffer));
            res.on("end", () => {
              resolve({
                ok: Boolean(res.statusCode && res.statusCode >= 200 && res.statusCode < 300),
                status: res.statusCode ?? 0,
                body: Buffer.concat(chunks).toString("utf8"),
              });
            });
          },
        );

        req.on("error", reject);
        req.setTimeout(12_000, () => {
          req.destroy(new Error("Telegram HTTPS request timed out."));
        });

        req.write(body);
        req.end();
      },
    );

    if (!httpsResult.ok) {
      return {
        ok: false as const,
        kind: "telegram_http_error" as const,
        status: httpsResult.status,
        details: httpsResult.body,
      };
    }

    return { ok: true as const };
  } catch (httpsError) {
    return {
      ok: false as const,
      kind: "telegram_network_error" as const,
      details:
        httpsError instanceof Error
          ? httpsError.message
          : lastFetchError instanceof Error
            ? lastFetchError.message
            : String(httpsError ?? lastFetchError ?? "Unknown error"),
    };
  }
}

export async function POST(request: Request) {
  let rawBodyText = "";
  try {
    rawBodyText = await request.text();
    const body = JSON.parse(rawBodyText) as {
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

    const token = process.env.TELEGRAM_TOKEN ?? process.env.BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID ?? process.env.CHAT_ID;

    if (!token || !chatId) {
      return Response.json(
        {
          error:
            "Telegram is not configured. Set TELEGRAM_TOKEN and TELEGRAM_CHAT_ID (or BOT_TOKEN and CHAT_ID) in environment variables.",
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

    const result = await sendTelegramMessage(token, chatId, text);

    if (!result.ok) {
      if (result.kind === "telegram_http_error") {
        return Response.json(
          {
            error: "Failed to send message to Telegram.",
            status: result.status,
          },
          { status: 502 },
        );
      }

      return Response.json(
        {
          error: "Failed to reach Telegram from the server.",
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (rawBodyText.trim().length > 0) {
      try {
        JSON.parse(rawBodyText);
      } catch {
        return Response.json({ error: "Invalid JSON body." }, { status: 400 });
      }
    }

    return Response.json(
      {
        error: "Unexpected server error.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
