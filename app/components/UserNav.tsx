import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { CreditCard, DoorClosed, Home, Settings } from "lucide-react";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const navItems = [
    { name: "Home", icon: Home, href: "/dashboard" },
    { name: "Einstellung", icon: Settings, href: "/dashboard/settings" },
    { name: "Kaufen", icon: CreditCard, href: "/dashboard/billing" },
];

export function UserNav({ name, email, image }: { name: string, email: string, image: string }) { //Interface für UserNav
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage className="h-full w-full rounded-[inherit] object-cover"
                            src={image}
                            alt="Colm Tuite" />
                        <AvatarFallback
                            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                            delayMs={600}
                        >
                            Salar
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align-item="center" forceMount >
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="w-full text-sm font-medium loading-none text-primary">{name}</p>
                        <p className="w-full text-xs loading-none text-muted-foreground">{email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {navItems.map((item, index) => (
                        <DropdownMenuItem asChild key={index}>
                            <Link
                                href={item.href} className="w-full flex justify-between items-center"
                            >
                                {item.name}
                                <span>
                                    <item.icon className="ml-2 h-4 w-4 text-primary" />
                                </span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="w-full flex justify-between items-center" asChild>
                    <LogoutLink>
                        Abmelden{" "}
                        <span>
                            <DoorClosed className="h-4 w-4 text-primary" />
                        </span>
                    </LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}