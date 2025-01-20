import prodcut1 from "@/public/products/Image-1.png";
import prodcut2 from "@/public/products/Image-2.png";
import prodcut3 from "@/public/products/Image-3.png";
import prodcut4 from "@/public/products/Image-4.png";
import ProductsCard from "@/components/products-card";


export default function AllProducts() {
    return (
        <><div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5">All Products</h2>
            {/* 4colums grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 mb-16">
                {/* products card component */}
                <ProductsCard image={prodcut1} title="Library Stool Chair" price={20} salePrice={30} label="New" labelcolor="bg-softGreen" />
                <ProductsCard image={prodcut2} title="Library Stool Chair" price={20} />
                <ProductsCard image={prodcut3} title="Library Stool Chair" price={10} salePrice={30} label="-10%" />
                <ProductsCard image={prodcut4} title="Library Stool Chair" price={30} salePrice={50} label="-40%" />

                <ProductsCard image={prodcut2} title="Library Stool Chair" price={20} />
                <ProductsCard image={prodcut3} title="Library Stool Chair" price={10} salePrice={30} label="-10%" />
                <ProductsCard image={prodcut1} title="Library Stool Chair" price={20} salePrice={30} label="New" labelcolor="bg-softGreen" />
                <ProductsCard image={prodcut4} title="Library Stool Chair" price={30} salePrice={50} label="-40%" />
            </div>
        </div>
        <div className="bg-lightGray -mb-20 pt-16 pb-12">
        {/* our subcribe sections */}
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-3 mb-6">
                    <h2 className="text-2xl sm:text-3xl  font-semibold capitalize  text-black text-center">
                    Or subscribe to the newsletter
                    </h2>
                    <div className="flex gap-3 my-10 md:w-1/2 mx-auto">
                            <input type="text" name="" id="" placeholder="Your Email address..." className="border border-gray-300 py-2 px-4 w-full rounded-lg"/>
                            <button className="bg-primary text-white text-xs md:text-sm py-1 md:py-2 px-2 md:px-4 rounded-lg outline-none focus:outline-none">Submit</button>
                        </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl capitalize font-semibold text-black text-center mb-12">
                    Follow products and discounts on Instagram
                    </h2>
                {/* 4colums grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-6 mb-10 insta">
                    {/* products card component */}
                    <ProductsCard image={prodcut1} title="Library Stool Chair" price={20}  />
                    <ProductsCard image={prodcut4} title="Library Stool Chair" price={30}  />
                    <ProductsCard image={prodcut2} title="Library Stool Chair" price={20} />
                    <ProductsCard image={prodcut3} title="Library Stool Chair" price={10} />
                    <ProductsCard image={prodcut4} title="Library Stool Chair" price={30}  />
                    <ProductsCard image={prodcut4} title="Library Stool Chair" price={30} />


                </div>

            </div>
            </div>
            </>
    );
}