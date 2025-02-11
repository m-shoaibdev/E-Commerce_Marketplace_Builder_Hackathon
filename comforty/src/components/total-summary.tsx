import { IBag } from "@/types/product";

interface Props {
  cartProducts: IBag[];
}
export default function TotalSummary({ cartProducts }: Props) {
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
