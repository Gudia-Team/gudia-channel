"use client";
import { Movie } from "@/models/types";
import MovieCardTmdb from "./MovieCardTmdb";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

interface Props {
    title: string;
    movies: Movie[];
}


export default function CategoryList({ title, movies }: Props) {
    return (
        <div className="md:px-12 mt-2 space-y-2 overflow-hidden">
            <h1 className="text-primary txt-md md:text-xl lg:text-2xl font-semibold">{title}</h1>
            <div className="relative flex items-center w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <HiChevronLeft className=" md:block text-white text-[40px] text-bold absolute
                        mt-4 cursor-pointer z-10"
                />
                <HiChevronRight className='md:block text-white text-[40px] absolute
                       mt-4 cursor-pointer right-0 z-10'
                />
                <div id={"slider + rowID"} className="relative flex w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-none ">
                    {movies.map((movie) => (
                        <MovieCardTmdb key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}
