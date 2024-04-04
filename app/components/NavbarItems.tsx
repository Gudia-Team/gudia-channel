"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps {
    name: string;
    href: string;
}

const links: linkProps[] = [
    { name: "Home", href: "/dashboard" },
    { name: "Tv Shows", href: "/dashboard/shows" },
    { name: "Movies", href: "/dashboard/movies" },
    { name: "Recently Added", href: "/dashboard/recently" },
    { name: "My List", href: "/dashboard/user/list" },
];

export default function NavbarItems() {
    const pathName = usePathname();
    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link
                                        href={link.href}
                                        className="text-white font-semibold underline text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link
                                        className="text-gray-300 font-normal text-sm"
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    );
}