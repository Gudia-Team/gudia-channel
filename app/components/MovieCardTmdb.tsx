import { baseImgUrl } from '@/lib/constants';
import { Movie } from '@/models/types'


export default function MovieCardTmdb({ movie }: { movie: Movie }) {
    return (
        <div className='group bg-zinc-900 clol-span relative h-[12vw]'>
            <img
                src={
                    movie?.backdrop_path || movie?.poster_path
                        ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
                        : "/assets/no-image.png"
                }
                alt='movie?.title || movie?.name'
                className='cursor-pointer object-cover transition
                 duration shadow-xl rounded-md
                  group-hover:opacity-90
                  sm:group-hover:opacity-0
                  delay-300
                  w-full
                  h-[12vw]'
            />
        </div>
    );
};
