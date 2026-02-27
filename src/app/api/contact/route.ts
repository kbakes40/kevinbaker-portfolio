import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, inquiryType, toEmail } = await req.json();

    if (!name || !email || !message || !toEmail) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: toEmail,
      subject: `${inquiryType} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="margin-bottom: 4px;">${inquiryType}</h2>
          <p style="color: #888; margin-top: 0;">New message from your portfolio contact form</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Email send error:", message);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
