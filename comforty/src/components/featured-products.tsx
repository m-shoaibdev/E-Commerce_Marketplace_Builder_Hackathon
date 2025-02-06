"use client";
import ProductsCard from "./products-card";
import { useEffect, useState } from "react";
import LoadingCircle from "./loading";
import ErrorMessage from "./error-message";
import { client } from "@/sanity/lib/client";
import { Tproduct } from "@/types/product";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(
          `*[_type == "products" && "featured" in tags]{_id,title,price,salePrice,"badge":badge.text,"badgeColor":badge.color.value,"imageUrl":image.asset->url,"slug":slug.current,"category":category->title,description,weight,"lenght":dimensions.length,"width":dimensions.width,"height":dimensions.height}`
        );
        console.log("Featured products data =>", products);
        setFeaturedProducts(products);
        setLoading(false);
      } catch (
        /* eslint-disable @typescript-eslint/no-explicit-any */
        error: any
      ) {
        setLoading(false);
        setError(error.message);
        console.log("Something wrong happened!", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-3 mb-6 md:mb-24">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5">
        Featured Products
      </h2>
      {/* 4colums grid */}
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 mb-10">
          {/* products card component */}
          {featuredProducts.map((product: Tproduct) => (
            <ProductsCard
              key={product._id + product.slug}
              productUrl={`/products/${product.slug || product._id}`}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              salePrice={product.salePrice}
              label={product.badge}
              labelcolor={product.badgeColor}
              category={product.category}
              width={product.width}
              height={product.height}
              lenght={product.lenght}
              weight={product.weight}
            />
          ))}
        </div>
      )}
    </div>
  );
}
