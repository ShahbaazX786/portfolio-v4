import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email, message } = await request.json();
  try {
    await connectDB();
    const msgRes = await Contact.create({ name, email, message });

    if (msgRes._id) {
      return NextResponse.json({
        msg: "Message Sent Sucessfully",
        success: true,
      });
    } else {
      return NextResponse.json({
        msg: "Unable to Send Message",
        success: false,
      });
    }

  } catch (err) {
    return NextResponse.json(error);
  }
}
