"use client";
import { Movie } from "@/models/types";
import MovieCardTmdb from "./MovieCardTmdb";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useState, useRef, RefObject } from 'react'

interface Props {
    title: string;
    movies: Movie[];
}

const CategoryList: React.FC<Props> = ({ title, movies }) => {
    const sliderRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); 
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    // Handler für left arrow click
    const handleLeftClick = () => {
        if (sliderRef.current) {
            const { current: slider } = sliderRef;
            slider.scrollLeft -= 300; 
            setScrollPosition(slider.scrollLeft);
        }
    };

    // Handler für right arrow click
    const handleRightClick = () => {
        if (sliderRef.current) {
            const { current: slider } = sliderRef;
            slider.scrollLeft += 300; 
            setScrollPosition(slider.scrollLeft);
        }
    };

    return (
        <div className="md:px-12 mt-2 space-y-2 overflow-hidden">
            <h1 className="text-primary txt-md md:text-xl lg:text-2xl font-semibold">{title}</h1>
            <div className="relative flex items-center w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <HiChevronLeft
                    className="md:block text-white text-[40px] text-bold absolute mt-4 cursor-pointer z-10"
                    onClick={handleLeftClick} 
                />
                <HiChevronRight
                    className='md:block text-white text-[40px] absolute mt-4 cursor-pointer right-0 z-10'
                    onClick={handleRightClick} 
                />
                <div className="relative flex w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-none gap-4"
                    ref={sliderRef}>
                    {movies.map((movie) => (
                        <MovieCardTmdb key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;