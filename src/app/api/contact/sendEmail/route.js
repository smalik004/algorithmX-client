import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, countryCode, phone, service, question } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "roshansingh910286@gmail.com",
        pass: "gymu txmu ffng zakm", // Consider using environment variables in production
      },
    });

    const mailOptions = {
      from: `"Contact Form" <roshansingh910286@gmail.com>`,
      to: "roshansingh910286@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${question}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
