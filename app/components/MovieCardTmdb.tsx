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
                            : `${baseImgUrl}`
                    }
                    alt={movie?.title || movie?.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className='cursor-pointer object-cover transition
                 duration shadow-xl rounded-md group-hover:opacity-90
                  sm:group-hover:opacity-0
                   delay-300 w-full h-[12vw]'
                />
                <div className='border'></div>
            </div>
            {showModel && <Modal movie={movie} closeModel ={closeModel} />}
        </>
    );
};
