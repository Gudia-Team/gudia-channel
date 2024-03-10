import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "lucide-react";
import { UserNav } from "./UserNav";

export async function Navbar() {
    const { isAuthenticated } = getKindeServerSession(); //verbindung zu kinde-auth-nextjs um alle page zu schützen
    return (
        <nav className="bg-background h-[8vh] flex items-center ">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">Gudia
                    </h1>
                    <p className="w-full text-xs loading-none text-muted-foreground">Tv Channel & Journalist </p>
                </Link>
                <div className="flex items-center gap-x-5">
                    <ThemeToggle />
                    {(await isAuthenticated()) ? (
                        <UserNav />
                    ) : (
                        <div className=" flex items-center gap-x-5">
                            <LoginLink>
                                <Button>Anmelden</Button>
                            </LoginLink>
                            <RegisterLink>
                                <Button variant="secondary">Konto erstellen</Button>
                            </RegisterLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )

}