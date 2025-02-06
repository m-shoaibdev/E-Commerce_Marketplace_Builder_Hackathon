import ProductsCard from "./products-card";
import Button from "./button";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Tproduct } from "@/types/product";
import LoadingCircle from "./loading";
import ErrorMessage from "./error-message";

export default function SingleFeaturedProducts() {
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
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-3 mb-6">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mt-2">
          Featured Products
        </h2>
        <div className="hidden md:block">
          <Button title="View All" href="/products" />
        </div>
      </div>
      {/* 4colums grid */}
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="grid grid-flow-col lg:grid-cols-5 gap-5 md:gap-6 mt-6 mb-10 scroll-smooth overflow-x-auto justify-between no-scrollbar">
          {/* products card component */}
          {featuredProducts.map((product: Tproduct) => (
            <div className="w-40 lg:w-auto" key={product._id + product.slug}>
              <ProductsCard
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
            </div>
          ))}
        </div>
      )}
      <div className="text-center md:hidden">
        <Button title="View All" href="/products" />
      </div>
    </div>
  );
}
