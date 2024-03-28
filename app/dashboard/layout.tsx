import { ReactNode } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "../lib/db";
import { stripe } from "../lib/stripe";

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
        select: {
            stripeCustomerId: true,
            id: true,
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
    if (!user?.stripeCustomerId) {
        const data = await stripe.customers.create({
            email: email,

        });
        await prisma.user.update({
            where: {
                id: id,
                email: email,
            },
            data: {
                stripeCustomerId: data.id,
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
            <div className="flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </div>

    );
}