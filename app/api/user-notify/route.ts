import { NextResponse } from "next/server";
import { sendMail } from "../../../service/mailService";

export async function POST(req: Request) {
  const data = await req.json();

  const subject = "New registration on Proactiv Marketing";
  const toEmail = data.userData.email;
  const templateName = "user-notify";

  sendMail(subject, toEmail, templateName, { data: data })
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });

  return NextResponse.json({ data });
}
