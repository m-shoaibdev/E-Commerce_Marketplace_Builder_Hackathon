"use client";

import CategoryCard from "@/components/category-card";
import ErrorMessage from "@/components/error-message";
import LoadingCircle from "@/components/loading";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";

type categoryT = {
  _id: string;
  title: string;
  imageUrl: string;
  slug?: string;
  productCount?: number;
};
export default function AllCategories() {
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await client.fetch(
          `*[_type == "categories"]{_id,title,"imageUrl":image.asset->url,"slug":slug.current,"productCount": count(*[_type == "products" && references(^._id)])}`
        );
        console.log("categories data =>", categories);
        setAllCategory(categories);
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
    <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-5 mb-12 md:mt-16 md:mb-20 lg:mb-24 ">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5">
        All Categories
      </h2>
      {/* 4colums grid */}
      {loading ? (
        <LoadingCircle />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 mt-6 mb-10">
          {/* categories card component */}
          {allCategory.map((category: categoryT) => (
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
