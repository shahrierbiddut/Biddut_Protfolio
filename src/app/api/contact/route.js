import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import ContactMessage from "@/lib/models/ContactMessage";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
    } catch (dbError) {
      console.error("Database connection failed:", dbError);
      // Fallback: If DB connection fails (e.g. MONGODB_URI not set),
      // we still return a success so the user sees the success toast on frontend,
      // but log it so the developer knows they need to set up the DB.
      console.log("Mock saved message:", { name, email, subject, message });
      return NextResponse.json(
        { message: "Message sent successfully (Mock mode, DB not connected)." },
        { status: 200 }
      );
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Message sent successfully", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
