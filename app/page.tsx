import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import gudia from '../public/images/gudia.jpg';
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    return redirect('/dashboard');
  }
  return (
    <>
      <MaxWidthWrapper >
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl'">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Willkommen Im Gudia Profesional</h1>
          <RegisterLink>
            <Button size="lg" className="w-60 py-4 ">
              Get Started Free
            </Button>
          </RegisterLink>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
