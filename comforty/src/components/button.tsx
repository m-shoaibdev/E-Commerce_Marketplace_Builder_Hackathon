import Link from "next/link";
interface ButtonProps {
    title: string,
    href: string
}

export default function Button( props: ButtonProps) {
    const {title, href} = props
    return (
        <Link href={href} className="bg-primary text-white text-sm md:text-base py-2.5 px-4 md:py-3.5 md:px-6 inline-flex gap-2 md:gap-3.5 items-center rounded-lg">
                        {title}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Link>
    );
}