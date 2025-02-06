"use client";
import LoadingCircle from "@/components/loading";
import { db } from "@/firebase/firebase-config";
import { IBag } from "@/types/product";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckOutPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingPostalCode, setBillingPostalCode] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [cartProducts, setCartProducts] = useState<IBag[]>([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingLoading, setShippingLoading] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("UserData") || "{}");
    if (!userData || !userData.userEmail) {
      router.push("/login");
      localStorage.setItem("lastVisitedURL", window.location.pathname);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "{}") || [];
      setCartProducts(Object.values(cart));
      setUserName(userData.userName);
      setEmail(userData.userEmail);
      setLoading(false);
    }
  }, [router]);

  const handleCheckout = async () => {
    try {
      setShippingLoading(true);
      const res = await fetch("/api/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shippingDetails: {
            userName,
            email,
            phone,
            billingAddress,
            billingCity,
            billingPostalCode,
            billingCountry,
          },
          cartProducts,
        }),
      });

      const responseData = await res.json();
      if (responseData.rates?.length) {
        setShippingCost(responseData.rates[0].shipping_amount.amount);
      } else {
        throw new Error(responseData.error || "No shipping rates available.");
      }
    } catch (error) {
      console.error("Shipping Error:", error);
    } finally {
      setShippingLoading(false);
    }
  };

  const handlePayNow = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          userEmail: email,
          shippingCost,
        }),
      });

      if (!res.ok) {
        console.error("Order placement failed");
        return;
      }

      const { url } = await res.json();
      // handle redirect to place order
      handlePlaceOrder();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      await addDoc(collection(db, "Orders"), {
        items: cartProducts,
        user: { userName, email, phone },
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        status: "Pending",
        paymentMethod: "Stripe",
        shippingDetails: {
          billingAddress,
          billingCity,
          billingPostalCode,
          billingCountry,
        },
      });
      localStorage.removeItem("cart");
    } catch (error) {
      console.error(error);
    }
  };

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + (item.salePrice || item.price) * item.quantity,
    0
  );
  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
      {loading ? (
        <div className="text-center w-full">
          <LoadingCircle />
        </div>
      ) : (
        <div className="flex flex-col-reverse md:flex-row gap-6 mt-10 mb-16">
          <div className="p-4 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

            {/* Billing Information */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="text-black text-base font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                id="fullName"
                placeholder="Your Full Name..."
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-black text-base font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Your Email address..."
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="text-black text-base font-semibold"
              >
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                placeholder="Your Phone Number..."
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="billingAddress"
                className="text-black text-base font-semibold"
              >
                Billing Address
              </label>
              <input
                type="text"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                id="billingAddress"
                placeholder="Complete Address (House No. / Street No. / Nearby Place)"
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="text-black text-base font-semibold"
              >
                City
              </label>
              <input
                type="text"
                value={billingCity}
                onChange={(e) => setBillingCity(e.target.value)}
                id="city"
                placeholder="New York"
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="text-black text-base font-semibold"
              >
                Country Code
              </label>
              <input
                type="text"
                value={billingCountry}
                onChange={(e) => setBillingCountry(e.target.value)}
                id="country"
                placeholder="2-letter Country Code, e.g., US, PK"
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="postalCode"
                className="text-black text-base font-semibold"
              >
                Postal Code
              </label>
              <input
                type="text"
                value={billingPostalCode}
                onChange={(e) => setBillingPostalCode(e.target.value)}
                id="postalCode"
                placeholder="10001"
                className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                className="mr-2"
              />
              <label htmlFor="acceptTerms" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-primary">
                  Terms and Conditions
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                onClick={handleCheckout}
                className="bg-primary text-white text-base md:text-lg py-2.5 md:py-3 px-4 md:px-6 rounded-lg outline-none focus:outline-none"
              >
                Complete Details
              </button>
            </div>
          </div>
          <div className="p-4 md:w-1/3 mt-10">
            <div className="text-sm">
              {/* products summary  */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                Summary
              </h2>
              <div className="flex justify-between mb-3">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-3">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              {shippingLoading ? (
                <div className="text-center">Loading shipping rates...</div>
              ) : (
                <div className="flex justify-between mb-3">
                  <p>Shipping Cost</p>
                  <p>${shippingCost.toFixed(2)}</p>
                </div>
              )}
              <div className="flex justify-between border-y border-[#D9D9D9] py-4 my-5">
                <p>Total</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              {/* <p className="text-[12px] text-center mb-4">TOTAL SAVINGS 25.00</p> */}
            </div>

            <div className="text-center">
              <button
                title="Pay Now"
                onClick={handlePayNow}
                className="bg-primary text-white text-sm md:text-base py-2.5 px-4 md:py-3.5 md:px-6 inline-flex gap-2 md:gap-3.5 items-center rounded-lg"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
