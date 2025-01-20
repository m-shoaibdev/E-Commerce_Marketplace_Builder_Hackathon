import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
    image: string | StaticImageData;
    title: string;
    productsCount?: string;
}

export default function CategoryCard({image, title, productsCount}: CategoryCardProps) {
    return (
    <div>
        {/* image */}
        <div className="relative  overflow-hidden rounded-[10px]">
            <Image src={image} alt="Category"className="object-cover w-full"/>
            {/* title and count */}
            <div className="absolute  bg-black p-4 bg-opacity-70 bottom-0 left-0 right-0  text-white">
                <h4 className="text-xl font-semibold my-1">{title}</h4>
                <p className="text-sm  font-light">{productsCount} Products</p>
            </div>
            
        </div>
    </div>
    );
}