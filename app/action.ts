"use server";

import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import Pusher from "pusher";


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

