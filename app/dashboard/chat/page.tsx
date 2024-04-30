import MassengerForm from "@/app/components/MessengerForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Chathomepage() {
    const session = await getKindeServerSession();
    if (!session) {
        redirect("/chathomepage");
        return null;
    }

    return (
        <div className="flex flex-col overflow-hidden">
            <MassengerForm />
        </div>

    )
}

