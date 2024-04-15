import { Button } from '@/components/ui/button';
import prisma from '../lib/db';
import { BsInfoLg } from "react-icons/bs";

async function getData() {
    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age: true,
            youtubeString: true,
        },
    });
    return data;
}


export default async function MovieVideo() {
    const data = await getData();
    return (
        <div className='h-[55vh] lg:h-[60vh] w-full flex justify-start items-center '>
            <video
                poster={data?.imageString ?? " "}  // neue änderung für nextjs video achten bitte auf ?? ""
                autoPlay
                muted
                loop
                src={data?.videoSource ?? ""}
                className='w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]'
            >
            </video>
            <div>
                <div className='relative w-[90%] lg:w-[35%] mx-auto ml-10'>
                    <h1 className='text-white text-4xl font-bold lg:text-6-xl md:text-5xl '>{data?.title}</h1>
                    <p className='text-lg mt-5  line-clamp-3'>{data?.overview}</p>
                    <div className='flex gap-x-3 mt-2'>
                        <Button>
                            <BsInfoLg className='mr-1' />
                            See More
                        </Button>
                        <Button>
                            Watch Now
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}