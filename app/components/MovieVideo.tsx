import { Button } from '@/components/ui/button';
import prisma from '../lib/db';
import { BsInfoLg } from "react-icons/bs";
import MovieButtons from './MovieButtons';

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
                className='w-full absolute top-0 left-0 h-[78vh] object-cover -z-10 '
            >
            </video>

            <div className='relative w-[90%] lg:w-[35%] mx-auto ml-10 text-primary'>
                <h1 className='text-white text-4xl font-bold lg:text-6-xl md:text-5xl '>{data?.title}</h1>
                <p className='text-lg mt-5  line-clamp-3'>{data?.overview}</p>
                <div className='flex gap-x-3 mt-2'>
                    <MovieButtons
                        age={data?.age as number}
                        duration={data?.duration as number}
                        id={data?.id as number}
                        overview={data?.overview as string}
                        releaseDate={data?.release as number}
                        title={data?.title as string}
                        youtubeUrl={data?.youtubeString as string}
                        key={data?.id}
                    />
                </div>
            </div>
        </div>

    )
}