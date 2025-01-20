import prodcut1 from "@/public/products/Image-1.png";
import prodcut2 from "@/public/products/Image-2.png";
import prodcut3 from "@/public/products/Image-3.png";
import prodcut4 from "@/public/products/Image-4.png";
import prodcut5 from "@/public/products/Image-7.png";
import ProductsCard from "./products-card";
import Button from "./button";

export default function SingleFeaturedProducts() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-3 mb-6">
            <div className="flex justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mt-2">Featured Products</h2>
            <div className="hidden md:block">
            <Button title="View All" href="/all-products" />
            </div>
            </div>
            {/* 4colums grid */}
            <div className="grid grid-flow-col lg:grid-cols-5 gap-5 md:gap-6 mt-6 mb-10 scroll-smooth overflow-x-auto justify-between no-scrollbar">
                {/* products card component */}
                <div className="w-40 lg:w-auto ">
                <ProductsCard image={prodcut1} title="Library Stool Chair" price={20} salePrice={30} label="New" labelcolor="bg-softGreen"/>
                </div>
                <div className="w-40 lg:w-auto">
                <ProductsCard image={prodcut2} title="Library Stool Chair" price={20}  />
                </div>
                <div className="w-40 lg:w-auto">
                <ProductsCard image={prodcut3} title="Library Stool Chair" price={10} salePrice={30} label="-10%"/>
                </div>
                <div className="w-40 lg:w-auto">
                <ProductsCard image={prodcut4} title="Library Stool Chair" price={30} salePrice={50} label="-40%"labelcolor="bg-softOrange"/>
                </div>
                <div className="w-40 lg:w-auto">
                <ProductsCard image={prodcut5} title="Library Stool Chair" price={10} salePrice={30} label="Sale"/>
                </div>
                
                
            </div>
            <div className="text-center md:hidden">
            <Button title="View All" href="/all-products" />
            </div>


        </div>
    );
}