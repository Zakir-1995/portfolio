import validator from "validator";
import Contact from "../models/contactModel.js";
import nodemailer from "nodemailer";

export const contactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(500).json({
      message: "All fields are Required!",
      success: false,
      error: true,
    });
  }
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ message: "Email is Invalid!", success: false, error: true });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: "hossainmdzakir2002@gmail.com",
      pass: "crbueztozrnxybke",
    },
  });

  // Send email notification
  const mailOptions = {
    from: "hossainmdzakir2002@gmail.com",
    to: `${email}`, // Replace with your admin email
    subject: "Message Submission",
    // text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333;
                line-height: 1.6;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #ddd;
            }
            .header h1 {
                color: #007bff;
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px 0;
            }
            .content p {
                margin: 10px 0;
            }
            .footer {
                text-align: center;
                font-size: 12px;
                color: #aaa;
                padding: 10px 0;
                border-top: 1px solid #ddd;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Form Submission!</h1>
            </div>
            <div class="content">
                <p><strong>Hi! ${name} </strong></p>
                <p><strong>Your message has been submitted! </strong></p>
                <p><strong>Your message is here:</strong></p>
                <p>${message}</p>
            </div>
            <div class="footer">
                <p>© ${new Date().getFullYear()} Md Zakir Hossain. All rights reserved.</p>
                <p>This is an automated message. Please do not reply.</p>
            </div>
        </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return res.status(200).json({
      message: "Message received. Thank you!",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
