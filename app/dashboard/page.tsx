import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import NavbarItems from "../components/NavbarItems";
import gudia from '../../public/images/gudia.jpg';

export default function DashboardPage() {
    return (
        <>
            <nav className=" w-full fixed ">
                <div className=" ">
                    <Image src={gudia} alt="gudia2" sizes="100vw" quality={100}
                        style={{ objectFit: 'cover', zIndex: '-99', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}
                        />
                    <div className="flex-row ml-8 gap-7 hidden lg:flex">
                        <NavbarItems label="Home" />
                        <NavbarItems label="Home" />
                        <NavbarItems label="Home" />
                        <NavbarItems label="Home" />
                    </div>
                </div>
            </nav>
        </>

    )
}
