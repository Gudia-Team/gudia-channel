import Image from 'next/image';
import { baseImgUrl } from '@/lib/constants';
import { Movie } from '@/models/types';

export default function MovieCardTmdb({ movie }: { movie: Movie }) {
    return (
        <div className='group bg-zinc-900 col-span relative h-[12vw]'>
            <Image
                src={
                    movie?.backdrop_path || movie?.poster_path
                        ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
                        : `${baseImgUrl}`
                }
                alt={movie?.title || movie?.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300'
            />
        </div>
    );
};
