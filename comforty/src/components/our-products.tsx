"use client";
import prodcut1 from "@/public/products/Image-1.png";
import prodcut2 from "@/public/products/Image-2.png";
import prodcut3 from "@/public/products/Image-3.png";
import prodcut4 from "@/public/products/Image-4.png";
import prodcut5 from "@/public/products/Image-5.png";
import prodcut6 from "@/public/products/Image-6.png";
import prodcut7 from "@/public/products/Image-7.png";

import ProductsCard from "./products-card";
import { Tproduct } from "@/types/product";
import LoadingCircle from "./loading";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ErrorMessage from "./error-message";

export default function OurProducts() {
  const [ourProducts, setOurProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(
          `*[_type == "products"]| order(_createdAt desc)[0..7]{_id,title,price,salePrice,"badge":badge.text,"badgeColor":badge.color.hex,"imageUrl":image.asset->url,"slug":slug.current}`
        );
        console.log("Our products data =>", products);
        setOurProducts(products);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
        console.log("Something wrong happened!", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-4 mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5 text-center">
        Our Products
      </h2>
      {/* 4colums grid */}
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 mb-16">
          {/* products card component */}
          {ourProducts.slice(0, 8).map((product: Tproduct) => (
            <ProductsCard
              key={product._id + product.slug}
              productUrl={`/products/${product.slug || product._id}`}
              image={product.imageUrl}
              title={product.title}
              price={product.price}
              salePrice={product.salePrice}
              label={product.badge}
              labelcolor="bg-softGreen"
            />
          ))}
        </div>
      )}
    </div>
  );
}
