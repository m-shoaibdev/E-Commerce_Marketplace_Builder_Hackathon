"use client";
import CartBag from "@/components/cart-bag";
import { useEffect, useState } from "react";
import { IBag } from "@/types/product";
import TotalSummary from "@/components/total-summary";
import Button from "@/components/button";
import Link from "next/link";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState<IBag[]>([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(cart) as IBag[];
    // console.log(items);
    setCartProducts(items);
  }, []);

  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Bag</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-10 mt-0 mb-16">
        <div className="md:col-span-2 pt-4">
          {/* products bag  */}

          {cartProducts.length === 0 ? (
            <p className="text-center text-lg mt-6">
              Your cart is currently empty.
              <Link href="/products" className="text-primary block">
                continue shopping.
              </Link>
            </p>
          ) : (
            cartProducts?.map((cartItem: IBag) => (
              <CartBag
                key={cartItem.title}
                imageUrl={cartItem.imageUrl}
                title={cartItem.title}
                price={cartItem.price}
                salePrice={cartItem.salePrice}
                category={cartItem.category}
                quantity={cartItem.quantity}
                favorite={true}
                productUrl={cartItem.productUrl}
              />
            ))
          )}
        </div>

        <div className="md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-1 text-sm">
          <TotalSummary />
          <div className="text-center">
            {cartProducts.length > 0 && (
              <Button title="Member Checkout" href="/checkout" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
