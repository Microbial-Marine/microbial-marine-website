import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, type, message, turnstileToken } = body;

  // Validate required fields
  if (!firstName || !lastName || !email || !message || !turnstileToken) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Verify Turnstile token
  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  );
  const turnstileData = await turnstileRes.json();
  if (!turnstileData.success) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }

  // Send email via Resend
  const { error } = await resend.emails.send({
    from: "Microbial Marine Contact <contact@microbialmarine.com>",
    to: "info@microbialmarine.com",
    replyTo: email,
    subject: `New contact from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Type: ${type || "Not specified"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
