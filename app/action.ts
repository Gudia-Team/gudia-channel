"use server";

import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "lucide-react";
import { revalidatePath } from "next/cache";


export async function addTowatchlist(formData: FormData) {
    "use server";
    const movieId = formData.get("movieId");
    const pathname = formData.get("pathname") as string;
    const data = await prisma.watchList.create({
        data: {
            userId: '',
            movieId: Number(movieId),
        },
    });

    revalidatePath(pathname);
}

export async function deleteFromWatchlist(formData: FormData) {
    "use server";
    const watchlistId = formData.get("watchlistId") as string;
    const pathname = formData.get("pathname") as string;

    const data = await prisma.watchList.delete({
        where: {
            id: watchlistId,
        },
    });

    revalidatePath(pathname);
}



async function getData(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            name: true,
            email: true,
            image: true,

        },
    });

    return data;
}
interface message {
    message: string;
    email: string;
}

export async function postData(formData: FormData) {
    "use server";
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getData(user?.id as string);
    const message = formData.get("message");


    await prisma.user.update({
        where: {
            id: user?.id,

        },
        data: {
            id: user?.id as string,
            email: user?.email as string,
            name: user?.family_name as string,

        }
    });

    const newdata  = await prisma.message.create({
        data: {
            message: message as string,
            email: user?.email as string,
            User: {
                connect: {
                    id: user?.id as string,
                },
            },
        },
        include: {
            User: {
                select: {
                    name: true,
                    email: true,
                    image: true,
                }

            }
        }
    })
}
