import Image from "next/image";
import about from "@/public/about-Image.png";
import Link from "next/link";
import largepro1 from "@/public/pop1.png";
import largepro2 from "@/public/pop2.png";
import largepro3 from "@/public/pop3.png";

export default function About() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
            <div className="flex flex-col md:flex-row gap-7  mt-10 mb-16">
                <div className="bg-primaryHover flex-1 flex flex-col gap-10 justify-between p-8 md:p-12 text-white">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us - Comforty</h2>
                        <p className="text-base font-normal">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                    </div>
                    <Link href="/" className="text-white bg-white bg-opacity-20 text-sm md:text-base py-2.5 px-3 md:py-3.5 md:px-5 w-fit">View collection</Link>
                </div>
                <div className="flex-1 self-center"><Image src={about} alt="about" /></div>
            </div>
            <div className="mt-10 mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 capitalize text-center">What makes our Brand Different</h2>
                <div className="flex gap-4 md:gap-10 flex-col md:flex-row md:items-center ">
                    <div className="bg-lightGray text-primary py-4 px-6 flex flex-col gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                        <h4>Next day as standard</h4>
                        <p>Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className="bg-lightGray text-primary py-4 px-6 flex flex-col gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


                        <h4>Made by true artisans</h4>
                        <p>Handmade crafted goods made with real passion and craftmanship</p>
                    </div>
                    <div className="bg-lightGray text-primary py-4 px-6 flex flex-col gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

                        <h4>Unbeatable prices</h4>
                        <p>For our materials and quality you want find better prices anywhere</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 capitalize text-center md:text-left">Our Popular Products </h2>
            <div className="flex gap-4 flex-col md:flex-row items-center">
                <div>
                    <Image src={largepro1} alt="product" />
                    <h4 className="text-lg md:text-xl font-semibold mt-2.5 mb-2">The Poplar suede sofa</h4>
                    <p>$99.00</p>
                </div>
                <div className="flex gap-4 items-center">
                <div>
                    <Image src={largepro2} alt="product"  />
                    <h4 className="text-lg md:text-xl font-semibold mt-2.5 mb-2">The Dandy chair</h4>
                    <p>$99.00</p>
                </div>
                <div>
                    <Image src={largepro3} alt="product" />
                    <h4 className="text-lg md:text-xl font-semibold mt-2.5 mb-2">The Dandy chair</h4>
                    <p>$99.00</p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}