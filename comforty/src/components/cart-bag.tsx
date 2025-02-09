import Link from "next/link";
import Image from "next/image";
import { IBag } from "@/types/product";

export default function CartBag({
  imageUrl,
  title,
  price,
  salePrice,
  category,
  quantity,
  favorite,
  productUrl,
}: IBag) {
  return (
    <div className="border-b border-[#D9D9D9] py-4">
      <div className="flex gap-6">
        <Image
          src={imageUrl}
          alt="large"
          className="w-36 h-auto md:h-full object-cover"
          width={300}
          height={300}
        />
        <div className="w-full">
          <div className="flex gap-4 justify-between mb-7 text-base md:text-lg">
            <Link href={productUrl} className="hover:text-primary">
              {title}
            </Link>
            <p>MRP: ${price && (salePrice || price) * quantity}</p>
          </div>
          {category && (
            <p className="text-sm md:text-base text-mediumGray mb-2">
              <Link
                className="hover:text-primary"
                href={`/categories/${category?.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Link>
            </p>
          )}
          <p className="text-sm md:text-base text-mediumGray mb-3">
            <span className="mr-10">Price: ${salePrice || price}</span>
            <span>Quantity: {quantity}</span>
          </p>
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 ${favorite ? "fill-red-500 stroke-red-500" : " hover:fill-red-500 hover:stroke-red-500"} hover:cursor-pointer`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
