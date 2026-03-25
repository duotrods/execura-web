import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Rate limiting (in-memory, best-effort on serverless) ──────────────────────
const rateMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;       // max 3 submissions per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) return true;
  rateMap.set(ip, [...timestamps, now]);
  return false;
}

// ── Gmail transporter ─────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // App Password, not your Gmail password
  },
});

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Get client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  try {
    const { firstName, lastName, email, phone, company, service, message } =
      await req.json();

    // Basic server-side validation
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Execura Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // sends to yourself
      replyTo: email,             // reply goes straight to the lead
      subject: `New enquiry: ${service} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2d2d2d;">
          <div style="background: #1a2744; padding: 32px; text-align: center;">
            <h1 style="color: #c9a962; font-size: 18px; letter-spacing: 4px; text-transform: uppercase; margin: 0;">
              New Contact Form Submission
            </h1>
          </div>

          <div style="padding: 32px; background: #ffffff; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #1a2744;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${phone}</td>
              </tr>` : ""}
              ${company ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #c9a962; font-weight: 600;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; line-height: 1.7; color: #555;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>

          <div style="padding: 20px 32px; background: #f9f9f9; border: 1px solid #e5e5e5; border-top: none; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 28px; background: #1a2744; color: white; text-decoration: none; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">
              Reply to ${firstName}
            </a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
