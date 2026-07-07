import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, budget, timeline, message } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required on server." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email format detected on server." },
        { status: 400 }
      );
    }

    // Server log for audits
    console.log(`[CONTACT_SUBMISSION_RECVD]:`, {
      name,
      email,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString()
    });

    // In a fully configured GCP setup, we could dispatch this to database or email queues.
    // For now we respond with immediate success!
    return NextResponse.json(
      { success: true, message: "Contact request processed successfully on server." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error in /api/contact route:", err);
    return NextResponse.json(
      { error: "Server encountered an error processing contact transmission." },
      { status: 500 }
    );
  }
}
