"use client";
import { cn } from "@/lib/utils"
import { CreditCard, Home, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "./UserNav";

export function DashboardNav() {
    const pathname = usePathname(); // usepathname() ist ein hook, das wir in der Datei utils.ts definiert haben
    console.log(pathname);
    return (
        <div className="bg-background border-cyan-400 border ">
            <nav className="grid items-start gap-2">
                {navItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <span
                            className={cn(   // cn ist eine helper function, die wir in der Datei utils.ts definiert haben
                                "group flex items-center px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-forground",
                                pathname === item.href ? "bg-accent" : "bg-transparent"
                            )}
                        >
                            <item.icon className="mr-2 h-4 w-4  text-primary" />
                            <span>{item.name}</span>
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}