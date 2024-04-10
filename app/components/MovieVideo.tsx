import { Button } from '@/components/ui/button';
import prisma from '../lib/db';

async function getData() {
    const data = await prisma.movie.findFirst({
        select: {
            id: true,
            title: true,
            description: true,
            videoUrl: true,
            thumbnail: true,
            genre: true,
            duration: true,
        },

    });
    return data;
}


export default async function MovieVideo() {
    const data = await getData();
    return (
        <div className='h-[55vh] lg:h-[60vh] w-full flex justify-start items-center '>
            <video
                poster={data?.thumbnail ?? " "}  // neue änderung für nextjs video achten bitte auf ?? ""
                autoPlay
                muted
                loop
                src={data?.videoUrl ?? ""}
                className='w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]'
            >
            </video>
            <div>
                <div className='relative w-[90%] lg:w-[35%] mx-auto ml-10'>
                    <h1 className='text-white text-4xl font-bold lg:text-6-xl md:text-5xl '>{data?.title}</h1>
                    <p className='text-lg mt-5  line-clamp-3'>{data?.description}</p>
                    <div className='flex gap-x-3 mt-2'>
                        <Button>
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