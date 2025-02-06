import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.NEXT_PUBLIC_Secret_key as string);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export async function POST(req: Request) {
  try {
    const { items, userEmail, shippingCost } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
      customer_email: userEmail,
      line_items: [
        ...items.map(
          (
            /* eslint-disable @typescript-eslint/no-explicit-any */
            item: any
          ) => ({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.imageUrl],
              },
              unit_amount: Math.round(
                parseFloat(item.salePrice ?? item.price) * 100
              ),
            },
            quantity: item.quantity,
          })
        ),
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Shipping" },
            unit_amount: Math.round(shippingCost * 100),
          },
          quantity: 1,
        },
      ],
    });

    // Send email
    await transporter.sendMail({
      from: `"Comforty" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Order Confirmation",
      html: `<h2>Thank you for your order!</h2><p>Your payment was successful. Your items will be shipped soon.</p>`,
    });
    return NextResponse.json({ url: session.url });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// Restrict GET method
export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
