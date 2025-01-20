import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white py-3.5 md:py-5 border-b border-lightGray">
                <div className="lg:container lg:mx-auto px-4 lg:px-10 flex justify-between">
                    <ul className="flex space-x-6 md:space-x-8 text-sm text-darkGray hover:*:text-primary mx-auto md:mx-0">
                        <li>
                            <Link href="/" className="text-primary">Home</Link>
                        </li>
                        <li>
                            <Link href="/cart">Shop</Link>
                        </li>
                        <li>
                            <Link href="/all-products">Product</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="text-sm hidden md:block">
                    <span className="mr-2 text-darkGray">Contact:</span><Link href="tel:123-456-7890" className="text-dark hover:text-primary font-medium">(808) 555-0111</Link>
                    </div>
                </div>
            </nav>
    );

}