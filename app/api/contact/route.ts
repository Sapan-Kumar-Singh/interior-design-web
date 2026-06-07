// app/api/contact/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, phoneNumber, serviceType, serviceName, message } =
      await req.json();
    const htmlContent = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  
  <p>Hello Team,</p>

  <p>
    You have received a new inquiry through the Apex Interiors website.
  </p>

  <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />

  <p><strong>Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phoneNumber}</p>

  ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ""}

  ${serviceName ? `<p><strong>Service Name:</strong> ${serviceName}</p>` : ""}

  <p><strong>Message:</strong></p>

  <blockquote
    style="
      margin:0;
      padding:12px 16px;
      background:#f8f8f8;
      border-left:4px solid #c8a97e;
    "
  >
    ${message}
  </blockquote>

  <br />

  <p>
    Please respond to the client at:
    <a href="mailto:${email}">
      ${email}
    </a>
  </p>

  <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />

  <p style="font-size:12px;color:#666;">
    This email was automatically generated from the Apex Interiors website.
  </p>

</div>
`;
    const { data, error } = await resend.emails.send({
      from: "Apex Interiors <contact@apexied.in>",
      to: ["info.apexied@gmail.com"],
      replyTo: email,
      subject: `New Inquiry from ${fullName}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend Error:", error);

      return Response.json(
        {
          success: false,
          error,
        },
        { status: 400 },
      );
    }

    return Response.json(
      {
        success: true,
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
