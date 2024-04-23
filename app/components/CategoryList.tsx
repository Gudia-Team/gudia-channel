"use client";
import { Movie } from "@/models/types";
import MovieCardTmdb from "./MovieCardTmdb";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface Props {
    title: string;
    movies: Movie[];
    rowID: number;
}

export default function CategoryList({ title, movies, rowID }: Props) {
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 500;
        }
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 500;
        }
    };
    return (
        <div className="md:px-12 mt-2 space-y-2 overflow-hidden">
            <h1 className="text-primary txt-md md:text-xl lg:text-2xl font-semibold">{title}</h1>
            <div className="relative flex items-center w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-primary left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />

                <div id={"slider + rowID"} className="relative flex w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth ">
                    {movies.map((movie) => (
                        <MovieCardTmdb key={movie.id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </div>
    )
}
