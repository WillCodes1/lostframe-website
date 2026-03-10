import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, subject, from_name, message } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.WEB3FORMS_KEY;

    if (!apiKey) {
      console.error("WEB3FORMS_KEY environment variable is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: apiKey,
        email,
        subject: subject || "New Email Signup",
        from_name: from_name || "Website Email Capture",
        message: message || `New subscriber: ${email}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Web3Forms API error:", errorData);
      return NextResponse.json({ error: "Failed to submit form" }, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in submit-email API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
