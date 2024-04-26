"use client";
import Image from 'next/image';
import { baseImgUrl } from '@/lib/constants';
import { Movie } from '@/models/types';
import { useState } from 'react';
import Modal from './Modal';





export default function MovieCardTmdb({ movie }: { movie: Movie }) {
    const [showModel, setShowModel] = useState(false);
    const openModel = () => setShowModel(true);
    const closeModel = () => setShowModel(false);
    return (
        <>
            <div className='group bg-zinc-900 col-span relative h-[12vw]' onClick={openModel}>
                <Image
                    src={
                        movie?.backdrop_path || movie?.poster_path
                            ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
                            : "/assets/no-image.png"
                    }
                    alt={movie?.title || movie?.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className='rounded-md absolute w-full h-full object-cover block min-w-full md:h[310px] object-left-top mr-5 
                    hover:border-[10px]
                    border-white transition-all duration-100 ease-in'
                />
                <p className='text-green-400 font-semibold mt-4'>
                    {movie?.title || movie?.name} ({movie?.release_date?.substring(0, 4)})
                </p>
                <div className='flex flex-row mt-4 gap-2 items-center'>
                    <p className='text-white text-[10px] lg:text-sm'>
                        {movie?.overview?.length > 50
                            ? `${movie?.overview.substring(0, 50)}...`
                            : movie?.overview}
                    </p>
                </div>
            </div>
            {showModel && <Modal movie={movie} closeModal={closeModel} />}
        </>
    );
};
