import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    return redirect('/dashboard');
  }
  return (
    <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">Willkommen Im Gudia Profesional</h1>
        </div>
        <div className="relative justify-center max-w-sm max-auto mt-2 mx-60 py-5" >
          <RegisterLink>
            <Button size="lg" className="w-60 py-4 ">
              Get Started Free
            </Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
}
