import Image from "next/image";
import gudia2 from '../../public/images/gudia2.jpg';

export default function DashboardPage() {
    return (
        <main>
            <Image
                alt="hero"
                src={gudia2}
                placeholder='blur'
                quality={100}
                fill
                sizes='100vw'
                style={{ objectFit: 'cover', zIndex: '-99' }}

            />
            <div>
                <h1>Hallo Hier Ist Dashboard</h1>
            </div>
        </main>
    )
}