import MessengerChat from "@/app/components/MessengerChat";
import MassengerForm from "@/app/components/MessengerForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function getData() {
    const data = await prisma?.message.findMany({
        select: {
            message: true,
            id: true,
            User: {
                select: {
                    name: true,
                    email: true,
                    image: true,
                }
            }
        },
        orderBy: {
            createdAt: "asc"
        },
        take:50,

    });
    return data;
}



export default async function Chathomepage() {
    const session = await getKindeServerSession();
    const data = await getData();
    if (!session) {
        redirect("/chathomepage");
        return null;
    }

    return (
        <div className="flex flex-col overflow-hidden">
            <MessengerChat data={data as any} />
            <MassengerForm />
        </div>

    )
}

