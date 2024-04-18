import Image from "next/image";
// import { ThemeToggle } from "./components/Themetoggle";
// import { Button } from "@/components/ui/button";
// import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
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
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center ">
          <Image
            src={gudia}
            alt="Gudia Logo"
            className="w-full absolute top-0 left-0 bottom-0 right-0 h-[100vh] object-cover -z-10 brightness-[60%]"
          ></Image>
        </div>
        <div className=" container flex-row justify-between items-center  pl-20 text-center ">
          <h1 className="text-6xl text-white">Unlimited films, series and more..
          </h1>
          <p className="text-3xl text-white">Enjoy <span className="text-primary">GUDIA TV.JOURNAL</span> wherever you want. Can be canceled at any time.
            Are you ready to go? Enter your email address to start or reactivate your membership.</p>
          <p className="text-xl text-bold text-yellow-500 mt-20  items-center text-center">© 2024 Gudia Tv.Journal All rights reserved. | Privacy Policy | Terms of Use</p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
