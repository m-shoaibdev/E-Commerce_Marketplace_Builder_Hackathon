"use client";
import cat1 from "@/public/categories/cat-Image1.png";
import cat2 from "@/public/categories/cat-Image2.png";
import cat3 from "@/public/categories/cat-Image3.png";
import CategoryCard from "./category-card";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import LoadingCircle from "./loading";
import ErrorMessage from "./error-message";
import Link from "next/link";

type categoryT = {
  _id: string;
  title: string;
  imageUrl: string;
  slug?: string;
  productCount?: number;
};
export default function TopCategory() {
  const [topCategory, setTopCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await client.fetch(
          `*[_type == "categories" && "top" in topcategory]{_id,title,"imageUrl":image.asset->url,"slug":slug.current,"productCount": count(*[_type == "products" && references(^._id)])}`
        );
        console.log("categories data =>", categories);
        setTopCategory(categories);
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
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-5 mb-12 md:mt-16 md:mb-20 lg:mb-24 ">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5">
        Top Category
      </h2>
      {/* 4colums grid */}
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 mt-6 mb-10">
          {/* categories card component */}
          {topCategory.map((category: categoryT) => (
            <Link
              href={`/categories/${category.slug || category._id}`}
              key={category._id + category.slug}
            >
              <CategoryCard
                image={category.imageUrl}
                title={category.title}
                productsCount={category.productCount}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
