import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Shahbaaz Alam <onboarding@resend.dev>",
      to: email,
      subject: "Shaik Shahbaaz Alam | Front-End Developer",
      react: EmailTemplate({ userName: name }),
    });

    if (data.data?.id !== null && data.error === null) {
      return NextResponse.json({ message: "Email Sent Sucessfully!" });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
