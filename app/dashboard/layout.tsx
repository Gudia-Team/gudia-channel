import { ReactNode } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import prisma from "../lib/db";

async function getData({ email, id, firstName, lastName, profileImage }: {
    email: string;
    id: string;
    firstName: string | undefined | null;
    lastName: string | undefined | null;
    profileImage: string | undefined | null;
}) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },

    });

    if (!user) {
        const name = `${firstName ?? ""} ${lastName ?? ""}`.trim();
        await prisma.user.create({
            data: {
                id: id,
                email: email,
                name: name,
            },
        });
    }
}

export default async function DashboardLayout({ children, }: { children: ReactNode; }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        return redirect("/");
    }
    await getData({
        email: user.email as string,
        firstName: user.given_name as string,
        id: user.id as string,
        lastName: user.family_name as string,
        profileImage: user.picture,
    });

    return (
        <div className="flex-col space-y-6 mt-10">
            <div className=" grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </div>

    );
}