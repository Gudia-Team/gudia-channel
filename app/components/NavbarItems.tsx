"use client";

import { Bell, Search } from "lucide-react";
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
        <div className="items-center overflow-hidden lg:flex text-primary font-extrabold ">
            <div className="flex items-center">
                <ul className="lg:flex gap-x-4 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link
                                        href={link.href}
                                        className="font-xs text-lg "
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link
                                        className="font-xs  text-lg"
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