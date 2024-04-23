import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import gudia from "../public/assets/gudia.jpg";







export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    return redirect('/dashboard');
  }
  return (
    <>
      <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center ">
        <Image
          src={gudia}
          alt="Gudia Logo"
          className="w-full absolute top-0 left-0 bottom-0 right-0 h-[100vh] object-cover -z-10 brightness-[60%]"
        />
        <div className="absolute top-[20%] left-0 right-0 lg:text-2xl flex flex-col justify-center items-center  text-center text-white z-10">
          <h1 className="text-2xl lg:text-6xl font-bold">Unlimited films, series and more..</h1>
          <p className="text-md lg:text-3xl mt-4">
            Enjoy <span className="text-primary">GUDIA TV.JOURNAL</span> wherever you want. Can be canceled at any time.
          </p>
          <p className="text-md lg:text-xl mt-4">
            Are you ready to go? Enter your email address to start or reactivate your membership.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="absolute bottom-5 left-0  right-0 text-lg lg:text-xl text-yellow-500">
          © 2024 Gudia Tv.Journal All rights reserved. | Privacy Policy | Terms of Use
        </p>
      </div>
    </>
  );
}
