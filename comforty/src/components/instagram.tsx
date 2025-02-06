import React, { useEffect, useState } from "react";
import ProductsCard from "./products-card";
import { client } from "@/sanity/lib/client";
import { Tproduct } from "@/types/product";
import LoadingCircle from "./loading";
import ErrorMessage from "./error-message";

export default function InstagramProducts() {
  const [instagramProducts, setInstagramProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(
          `*[_type == "products" && "instagram" in tags]{_id,title,price,"imageUrl":image.asset->url,"slug":slug.current}`
        );
        console.log("Featured products data =>", products);
        setInstagramProducts(products);
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-6 mb-10 insta">
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        instagramProducts.map((product: Tproduct) => (
          <ProductsCard
            key={product._id + product.slug}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            productUrl={`/products/${product.slug || product._id}`}
          />
        ))
      )}
    </div>
  );
}
