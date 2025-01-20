import Image from "next/image";
import product1 from "@/public/large-Image2.png";
import textrotate from "@/public/rotatetext.png";
import product2 from "@/public/products/Image-3.png";
import product3 from "@/public/products/Image-1.png";
import product4 from "@/public/products/Image-4.png";
import product5 from "@/public/products/Image-5.png";

export default function GalleryGrid() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-16 mb-12 md:mt-12 md:mb-32">
                <h1 className="lg:hidden text-2xl sm:text-3xl md:text-[32px] font-semibold mb-5 uppercase text-black text-center">Explore new and popular styles</h1>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-12 sm:grid-rows-2  md:grid-rows-2 lg:grid-rows-2">
                <div className="md:row-span-1 col-span-12 lg:row-span-2 lg:col-span-1 hidden lg:block">
                    <Image src={textrotate} alt="text" className="mx-auto lg:ml-auto lg:mr-4  mt-4 xl:mt-10"/>
                </div>
                <div className="md:row-span-2 col-span-12 md:col-span-6 lg:col-span-5">
                    <Image src={product1} alt="large" className="w-full h-auto md:h-full object-cover"/>
                </div>
                <div className="col-span-12 md:col-span-3"><Image src={product2} alt="large" className="w-full h-auto md:h-full object-cover"/></div>
                <div className="col-span-12 md:col-span-3"><Image src={product3} alt="large" className="w-full h-auto md:h-full object-cover"/></div>
                <div className="col-span-12 md:col-span-3"><Image src={product4} alt="large" className="w-full h-auto md:h-full object-cover"/></div>
                <div className="col-span-12 md:col-span-3"><Image src={product5} alt="large" className="w-full h-auto md:h-full object-cover"/></div>
                
            </div>
        </div>
    );
}