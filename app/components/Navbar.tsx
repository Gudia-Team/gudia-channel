import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import React, { useEffect, useState } from 'react';
import NavbarItems from "./NavbarItems";
import MaxWidthWrapper from "./MaxWidthWrapper";




export async function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession(); //verbindung zu kinde-auth-nextjs um alle page zu schützen
    const user = await getUser();
    return (
        <div className="relative justify-between overflow-hidden bg-black lg:bg-opacity-40">
            <main className="z-50 sticky top-0 inset-x-0 h-16 mt-3 ml-4 mr-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative justify-start ml-4">
                        <h1 className="font-bold text-2xl text-primary">Gudia
                        </h1>
                        <p className="w-full text-xs loading-none text-muted-foreground">Tv Channel & Journalist </p>
                    </Link>
                    <NavbarItems />
                    <div className="flex items-center gap-x-5 mr-4">
                        <ThemeToggle />
                        {(await isAuthenticated()) ? (
                            <UserNav name={user?.given_name as string} email={user?.email as string} image={user?.picture as string} />
                        ) : (
                            <div className=" flex items-center gap-x-5">
                                <LoginLink>
                                    <Button>Sign in</Button>
                                </LoginLink>
                                <RegisterLink>
                                    <Button variant="secondary">Sign Up</Button>
                                </RegisterLink>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )

}