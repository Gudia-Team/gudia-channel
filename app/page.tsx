import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import gudia from "../public/assets/gudia.jpg";
export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    return redirect('/dashboard');
  }
  return (
    <>
      <MaxWidthWrapper >
        <div className="py-20 mx-auto text-center flex flex-col items-center">
          <Image
            src={gudia}
            alt="Gudia Logo"
            className="w-full absolute top-0 left-0 h-[80vh] object-cover -z-10 "
          ></Image>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
