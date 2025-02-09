"use client";
import ProductsCard from "@/components/products-card";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import LoadingCircle from "@/components/loading";
import ErrorMessage from "@/components/error-message";
import { Tproduct } from "@/types/product";

export default function CategoryProducts({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("Category slug =>", slug);
  const [allProducts, setAllProducts] = useState<Tproduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(
          `*[_type == "products"  && (category->slug.current == "${slug}" || category._ref == "${slug}")]{_id,title,price,salePrice,"badge":badge.text,"badgeColor":badge.color.value,"imageUrl":image.asset->url,"slug":slug.current,"category":category->title,description,weight,"lenght":dimensions.length,"width":dimensions.width,"height":dimensions.height}`
        );
        console.log("All products data =>", products);
        setAllProducts(products);
        setLoading(false);
      } catch (
        /* eslint-disable @typescript-eslint/no-explicit-any */
        error: any
      ) {
        setLoading(false);
        if (!navigator.onLine) {
          setError("No internet connection. Please check your network.");
        } else {
          setError(error.message);
        }
        console.log("Something wrong happened!", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5">
        {allProducts.length > 0 && allProducts[0].category
          ? `${allProducts[0].category} Products`
          : "Products"}
      </h2>
      {/* 4colums grid */}
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 mb-16">
          {/* products card component */}
          {allProducts.map(
            (product: Tproduct) => (
              console.log(product),
              (
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
              )
            )
          )}
        </div>
      )}
    </div>
  );
}
