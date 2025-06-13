import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();
    // Check if it's popup form by looking for description field
    const isPopupForm = formData.hasOwnProperty("description");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "connect@thealgorithmx.com",
        pass: "megl djvk cnwl tszj",
      },
    });

    // Admin email template for popup form
    const popupAdminMail = {
      from: `"Popup Form" <connect@thealgorithmx.com>`,
      to: "connect@thealgorithmx.com",
      subject: "New Consultation Request from ",
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.countryCode} ${formData.phone}</p>
        <p><strong>Project Description:</strong> ${formData.description}</p>
      `,
    };

    // Admin email template for contact form
    const contactAdminMail = {
      from: `"Contact Form" <connect@thealgorithmx.com>`,
      to: "connect@thealgorithmx.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.countryCode} ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong> ${formData.question}</p>
      `,
    };

    // User confirmation email for popup form
    const popupUserMail = {
      from: `"AlgorithmX" <connect@thealgorithmx.com>`,
      to: formData.email,
      subject: "Thank you for your consultation request",
      html: `
        <h2>Thank you for your interest in AlgorithmX!</h2>
        <p>Dear ${formData.name},</p>
        <p>We have received your consultation request and our team will review your project details.</p>
        <p>Here's a summary of your submission:</p>
        <p><strong>Project Description:</strong> ${formData.description}</p>
        <br/>
        <p>We will contact you shortly to discuss your project in detail.</p>
        <br/>
        <p>Best regards,</p>
        <p>Team AlgorithmX</p>
      `,
    };

    // User confirmation email for contact form
    const contactUserMail = {
      from: `"AlgorithmX" <connect@thealgorithmx.com>`,
      to: formData.email,
      subject: "Thank you for contacting AlgorithmX",
      html: `
        <h2>Thank you for reaching out to AlgorithmX!</h2>
        <p>Dear ${formData.name},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p>Here's a summary of your submission:</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong> ${formData.question}</p>
        <br/>
        <p>Best regards,</p>
        <p>Team AlgorithmX</p>
      `,
    };

    try {
      // Send appropriate emails based on form type
      if (isPopupForm) {
        await transporter.sendMail(popupAdminMail);
        await transporter.sendMail(popupUserMail);
      } else {
        await transporter.sendMail(contactAdminMail);
        await transporter.sendMail(contactUserMail);
      }

      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      throw emailError; // Re-throw to be caught by outer catch block
    }
  } catch (error) {
    console.error("Error in email route:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
