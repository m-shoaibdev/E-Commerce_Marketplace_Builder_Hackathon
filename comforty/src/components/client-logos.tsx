import Image from "next/image";
import Logo0 from "@/public/logos/Logo-0.png";
import Logo1 from "@/public/logos/Logo-1.png";
import Logo2 from "@/public/logos/Logo-2.png";
import Logo3 from "@/public/logos/Logo-3.png";
import Logo4 from "@/public/logos/Logo-4.png";
import Logo5 from "@/public/logos/Logo-5.png";
import Logo6 from "@/public/logos/Logo-6.png";

export default function ClientLogos() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-4 mb-8 md:mt-5 md:mb-8 ">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center *:-my-5 *:lg:my-0">
                <Image src={Logo0} alt="logo0" />
                <Image src={Logo1} alt="logo1" />
                <Image src={Logo2} alt="logo2" />
                <Image src={Logo3} alt="logo3" />
                <Image src={Logo4} alt="logo4" />
                <Image src={Logo5} alt="logo5" />
                <Image src={Logo6} alt="logo6" />
            </div>
        </div>
    );
}