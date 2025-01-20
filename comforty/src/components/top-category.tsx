import cat1 from "@/public/categories/cat-Image1.png";
import cat2 from "@/public/categories/cat-Image2.png";
import cat3 from "@/public/categories/cat-Image3.png";
import CategoryCard from "./category-card";

export default function TopCategory() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-5 mb-12 md:mt-16 md:mb-20 lg:mb-24 ">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5">Top Category</h2>
            {/* 4colums grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 mt-6 mb-10">
                {/* products card component */}
                <CategoryCard image={cat1} title="Wing Chair" productsCount="3,584"/>
                <CategoryCard image={cat2} title="Wooden Chair" productsCount="175"/>
                <CategoryCard image={cat3} title="Desk Chair" productsCount="3,584"/>
            </div>

        </div>
    );
}