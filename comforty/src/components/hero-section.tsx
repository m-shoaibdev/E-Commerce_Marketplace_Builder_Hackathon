import Image from "next/image";
import Chair from "@/public/ProductImage.png";
import Button from "./button";

export default function HeroSection() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10">
            <div className="bg-lightGray flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-7 py-12 md:pt-20 px-8 md:px-14 md:pb-28 rounded-bl-[48px]">
                <div className="lg:mr-8">
                    <p className="text-sm tracking-widest transform uppercase">
                        Welcome to chairy
                    </p>
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mt-5 mb-7 md:mb-10">
                        Best Furniture
                        <br />
                        Collection for your <br className="hidden md:block" /> interior.
                    </h1>
                    <Button title="Shop Now" href="all-products" />
                </div>
                <Image src={Chair} alt="chair" className="mt-8 md:mt-0 xl:mx-auto" />
            </div>
        </div>
    );
}
