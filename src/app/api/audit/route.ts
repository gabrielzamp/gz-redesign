import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export const runtime = "nodejs"; // importante: cheerio roda no runtime node

function cleanText(s: string) {
  return s
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

function uniq(arr: string[]) {
  return Array.from(new Set(arr.map((x) => cleanText(x)).filter(Boolean)));
}

function absUrl(base: string, href: string) {
  try {
    return new URL(href, base).toString();
  } catch {
    return href;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing ?url=" }, { status: 400 });
  }

  // segurança básica: só http/https
  if (!/^https?:\/\/.+/i.test(url)) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; SiteAuditBot/1.0; +https://example.com)",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
      // evite cache quando testando
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Fetch failed: ${res.status} ${res.statusText}` },
        { status: 502 }
      );
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const title = cleanText($("title").first().text());
    const metaDescription = cleanText(
      $('meta[name="description"]').attr("content") || ""
    );

    const h1 = cleanText($("h1").first().text());
    const headings = uniq(
      $("h1,h2,h3")
        .map((_, el) => $(el).text())
        .get()
    );

    const ctas = uniq(
      $("a,button,input[type=submit],input[type=button]")
        .map((_, el) => {
          const tag = el.tagName?.toLowerCase();
          if (tag === "input") return String($(el).attr("value") || "");
          return $(el).text();
        })
        .get()
    );

    const links = uniq(
      $("a[href]")
        .map((_, el) => absUrl(url, String($(el).attr("href") || "")))
        .get()
    ).slice(0, 80); // limite para não explodir token

    const forms = $("form").length;
    const inputs = $("input,textarea,select").length;

    // “Sections” simples: cada H2 + o texto até o próximo H2
    const sections: Array<{ heading: string; bodyText: string; ctas: string[] }> =
      [];
    $("h2").each((_, el) => {
      const heading = cleanText($(el).text());
      let body = "";
      let ctaLocal: string[] = [];

      const nodes = $(el).nextUntil("h2");
      body = cleanText(
        nodes
          .find("p,li")
          .map((_, x) => $(x).text())
          .get()
          .join(" ")
      );

      ctaLocal = uniq(
        nodes
          .find("a,button")
          .map((_, x) => $(x).text())
          .get()
      );

      if (heading || body || ctaLocal.length) {
        sections.push({ heading, bodyText: body, ctas: ctaLocal });
      }
    });

    // texto “geral” (pra o GPT ter contexto), com limite
    const plainText = cleanText(
      $("body")
        .text()
        .slice(0, 12000)
    );

    return NextResponse.json({
      url,
      title,
      metaDescription,
      h1,
      headings,
      ctas,
      links,
      forms,
      inputs,
      sections: sections.slice(0, 12),
      plainText,
      fetchedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Unexpected error", details: String(err?.message || err) },
      { status: 500 }
    );
  }
}
