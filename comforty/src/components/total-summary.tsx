"use client";
import { IBag } from "@/types/product";
import React, { useEffect, useState } from "react";

export default function TotalSummary() {
  const [cartProducts, setCartProducts] = useState<IBag[]>([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(cart) as IBag[];
    setCartProducts(items);
  }, []);
  const subtotal = cartProducts.reduce(
    (sum, item) => sum + (item.salePrice || item.price) * item.quantity,
    0
  );
  return (
    <div className="text-sm">
      {/* products summary  */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Summary</h2>
      <div className="flex justify-between mb-3">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-3">
        <p>Estimated Delivery & Handling</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between border-y border-[#D9D9D9] py-4 my-5">
        <p>Total</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      {/* <p className="text-[12px] text-center mb-4">TOTAL SAVINGS 25.00</p> */}
    </div>
  );
}
