import prisma from '../lib/db';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Video } from '@/types/types';
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
        <div className='h-[55vh] lg:h-[60vh] w-full flex justify-center items-center '>
            <video
                poster={data?.thumbnail ?? " "}  // neue änderung für nextjs video achten bitte auf ?? ""
                autoPlay
                muted
                loop
                src={data?.videoUrl ?? ""} 
                className='w-full absolute top-0 left-0 h-[60vh] object-cover'
            >
            </video>
        </div>
    )
}