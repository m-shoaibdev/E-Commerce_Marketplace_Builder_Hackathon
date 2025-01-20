export default function CheckOutPage() {
  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
      <div className="flex flex-col md:flex-row-reverse gap-6 mt-10 mb-16">
        <div className="p-4 flex-1">
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
              name="fullName"
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
              name="email"
              id="email"
              placeholder="Your Email address..."
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
              name="billingAddress"
              id="billingAddress"
              placeholder="Your Billing Address..."
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
              name="city"
              id="city"
              placeholder="City..."
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
              name="postalCode"
              id="postalCode"
              placeholder="Postal Code..."
              className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
            />
          </div>

          {/* Shipping Information */}
          <div className="mb-4">
            <label
              htmlFor="shippingAddress"
              className="text-black text-base font-semibold"
            >
              Shipping Address (if different)
            </label>
            <input
              type="text"
              name="shippingAddress"
              id="shippingAddress"
              placeholder="Your Shipping Address..."
              className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="shippingCity"
              className="text-black text-base font-semibold"
            >
              Shipping City
            </label>
            <input
              type="text"
              name="shippingCity"
              id="shippingCity"
              placeholder="Shipping City..."
              className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="shippingPostalCode"
              className="text-black text-base font-semibold"
            >
              Shipping Postal Code
            </label>
            <input
              type="text"
              name="shippingPostalCode"
              id="shippingPostalCode"
              placeholder="Shipping Postal Code..."
              className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
            />
          </div>

          {/* Payment Information */}
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="text-black text-base font-semibold"
            >
              Credit Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              placeholder="Enter your Credit Card Number..."
              className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expirationDate"
              className="text-black text-base font-semibold"
            >
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              id="expirationDate"
              placeholder="MM/YY"
              className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="text-black text-base font-semibold">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              placeholder="CVV"
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
              <a href="/terms" className="text-blue-600">
                Terms and Conditions
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button className="bg-primary text-white text-base md:text-lg py-2.5 md:py-3 px-4 md:px-6 rounded-lg outline-none focus:outline-none">
              Complete Purchase
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-12 mt-10"></div>
      </div>
    </div>
  );
}
