import SingleFeaturedProducts from "@/components/single-featured-products";
import Image from "next/image";
import ProductImage from "@/public/single-Image.png";
import Link from "next/link";

export default function SingleProduct() {
    return (
        <>
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20 flex flex-col md:flex-row gap-10 lg:gap-20">
            {/* single product image */}
            <div className="flex-1">
                <Image src={ProductImage} alt="product" className="w-full h-auto md:h-full object-cover"/>
            </div>
            {/* single product details */}
            <div className="flex-1 ">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl md:mt-5 mb-7 md:mb-10">
            Library Stool Chair</h1>
            <div className="bg-primary text-white font-semibold text-sm md:text-xl py-2.5 px-4 md:py-2 md:px-4 inline-flex items-center rounded-full">$20.00 USD</div>

            <div className="border-t border-[#D9D9D9] my-6 md:my-8"></div>

            <p className="text-mediumGray text-base md:text-xl mt-6 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <Link href="#" className="bg-primary text-white text-base md:text-xl py-2.5 px-4 md:py-3.5 md:px-6 inline-flex gap-3.5 items-center rounded-lg">
                        
            <svg className="size-6" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.52087 0.979172L3.42754 1.30917L4.31029 11.8261C4.3442 12.2399 4.5329 12.6258 4.83873 12.9066C5.14457 13.1875 5.54506 13.3427 5.96029 13.3413H15.9611C16.3587 13.3418 16.7431 13.1987 17.0436 12.9383C17.344 12.6779 17.5404 12.3178 17.5965 11.9242L18.4673 5.91267C18.4905 5.7528 18.482 5.58991 18.4422 5.43334C18.4024 5.27676 18.3322 5.12956 18.2354 5.00015C18.1387 4.87075 18.0175 4.76168 17.8786 4.67918C17.7397 4.59667 17.5859 4.54236 17.426 4.51934C17.3673 4.51292 3.73371 4.50834 3.73371 4.50834" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.948 7.89542H14.4899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path clipRule="evenodd" d="M5.55786 16.5194C5.62508 16.5165 5.69219 16.5273 5.75515 16.551C5.81811 16.5748 5.87562 16.611 5.9242 16.6575C5.97279 16.7041 6.01145 16.76 6.03787 16.8219C6.06428 16.8837 6.0779 16.9503 6.0779 17.0176C6.0779 17.0849 6.06428 17.1515 6.03787 17.2134C6.01145 17.2753 5.97279 17.3312 5.9242 17.3777C5.87562 17.4243 5.81811 17.4605 5.75515 17.4842C5.69219 17.508 5.62508 17.5187 5.55786 17.5158C5.42942 17.5103 5.30808 17.4554 5.21914 17.3626C5.13021 17.2698 5.08057 17.1462 5.08057 17.0176C5.08057 16.8891 5.13021 16.7655 5.21914 16.6726C5.30808 16.5798 5.42942 16.5249 5.55786 16.5194Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.8988 16.5194C16.0312 16.5194 16.1583 16.5721 16.252 16.6657C16.3457 16.7594 16.3983 16.8865 16.3983 17.019C16.3983 17.1515 16.3457 17.2786 16.252 17.3723C16.1583 17.466 16.0312 17.5186 15.8988 17.5186C15.7663 17.5186 15.6392 17.466 15.5455 17.3723C15.4518 17.2786 15.3992 17.1515 15.3992 17.019C15.3992 16.8865 15.4518 16.7594 15.5455 16.6657C15.6392 16.5721 15.7663 16.5194 15.8988 16.5194V16.5194Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                        Add To Cart
                    </Link>

            </div>
           
        </div>
         {/* 5colums single page featured products grid */}
        <SingleFeaturedProducts />
            
        </>
    );
}