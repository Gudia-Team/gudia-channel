import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import NavbarItems from "../components/NavbarItems";
import gudia from '../../public/images/gudia.jpg';

export default function DashboardPage() {
    return (
        <MaxWidthWrapper>
            <Image
                alt="hero"
                src={gudia}
                placeholder='blur'
                quality={100}
                fill
                sizes='100vw'
                style={{ objectFit: 'cover', zIndex: '-99' }}

            />
            <div className=" flex gap-4 top-10 left-11 ml-80 items-center ">
                <NavbarItems label="Home" />
                <NavbarItems label="Home" />
                <NavbarItems label="Home" />
                <NavbarItems label="Home" />
            </div>
        </MaxWidthWrapper>
    )
}