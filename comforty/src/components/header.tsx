import Image from "next/image";
import Logo from "@/public/logos/Logo.png";
import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
    return (
        <header>
            {/* Top bar */}
            <div className="topbar bg-dark text-white text-13 py-2 md:py-3">
                <div className="lg:container lg:mx-auto px-4 lg:px-10 flex flex-col sm:flex-row-reverse gap-1 sm:gap-4 sm:justify-between items-center">
                    <ul className="flex space-x-5">
                        <li>
                            <Link href="/#" className="flex gap-1 items-center">Eng
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">Faqs</Link>
                        </li>
                        <li>
                            <Link href="/faq" className="flex gap-1 items-center">Need Help
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                </svg>

                            </Link>
                        </li>
                    </ul>
                    <p className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

                        Free shipping on all orders over $50</p>
                </div>
            </div>
            {/* logo and cart */}
            <div className="logo-cart bg-lightGray py-4">
                <div className="lg:container lg:mx-auto px-4 lg:px-10 flex justify-between items-center">
                    <Link href="/">
                    <Image src={Logo} alt="logo" className="w-36 sm:w-40 md:w-[165px] h-auto "/></Link>
                    <Link href={"/cart"} className="flex gap-2 items-center bg-white py-2.5 px-4 text-13 hover:text-primary">
                        <svg  className="size-5 " viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.52087 0.979172L3.42754 1.30917L4.31029 11.8261C4.3442 12.2399 4.5329 12.6258 4.83873 12.9066C5.14457 13.1875 5.54506 13.3427 5.96029 13.3413H15.9611C16.3587 13.3418 16.7431 13.1987 17.0436 12.9383C17.344 12.6779 17.5404 12.3178 17.5965 11.9242L18.4673 5.91267C18.4905 5.7528 18.482 5.58991 18.4422 5.43334C18.4024 5.27676 18.3322 5.12956 18.2354 5.00015C18.1387 4.87075 18.0175 4.76168 17.8786 4.67918C17.7397 4.59667 17.5859 4.54236 17.426 4.51934C17.3673 4.51292 3.73371 4.50834 3.73371 4.50834" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.948 7.89542H14.4899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path clipRule="evenodd" d="M5.55786 16.5194C5.62508 16.5165 5.69219 16.5273 5.75515 16.551C5.81811 16.5748 5.87562 16.611 5.9242 16.6575C5.97279 16.7041 6.01145 16.76 6.03787 16.8219C6.06428 16.8837 6.0779 16.9503 6.0779 17.0176C6.0779 17.0849 6.06428 17.1515 6.03787 17.2134C6.01145 17.2753 5.97279 17.3312 5.9242 17.3777C5.87562 17.4243 5.81811 17.4605 5.75515 17.4842C5.69219 17.508 5.62508 17.5187 5.55786 17.5158C5.42942 17.5103 5.30808 17.4554 5.21914 17.3626C5.13021 17.2698 5.08057 17.1462 5.08057 17.0176C5.08057 16.8891 5.13021 16.7655 5.21914 16.6726C5.30808 16.5798 5.42942 16.5249 5.55786 16.5194Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8988 16.5194C16.0312 16.5194 16.1583 16.5721 16.252 16.6657C16.3457 16.7594 16.3983 16.8865 16.3983 17.019C16.3983 17.1515 16.3457 17.2786 16.252 17.3723C16.1583 17.466 16.0312 17.5186 15.8988 17.5186C15.7663 17.5186 15.6392 17.466 15.5455 17.3723C15.4518 17.2786 15.3992 17.1515 15.3992 17.019C15.3992 16.8865 15.4518 16.7594 15.5455 16.6657C15.6392 16.5721 15.7663 16.5194 15.8988 16.5194V16.5194Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Cart
                        <div className="bg-primaryHover text-white text-[10px] px-2 py-1 rounded-full ml-0.5">2</div>
                    </Link>
                </div>
            </div>
            {/* navigation */}
            <Navbar />
        </header>
    );
}