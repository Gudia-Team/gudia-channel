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
    const sliderRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); // Strongly typed ref object
    const [scrollPosition, setScrollPosition] = useState<number>(0); // State to track scroll position, typed as number

    // Handler for left arrow click
    const handleLeftClick = () => {
        if (sliderRef.current) {
            const { current: slider } = sliderRef;
            slider.scrollLeft -= 300; // Adjust this value as needed for your layout
            setScrollPosition(slider.scrollLeft);
        }
    };

    // Handler for right arrow click
    const handleRightClick = () => {
        if (sliderRef.current) {
            const { current: slider } = sliderRef;
            slider.scrollLeft += 300; // Adjust this value as needed for your layout
            setScrollPosition(slider.scrollLeft);
        }
    };

    return (
        <div className="md:px-12 mt-2 space-y-2 overflow-hidden">
            <h1 className="text-primary txt-md md:text-xl lg:text-2xl font-semibold">{title}</h1>
            <div className="relative flex items-center w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <HiChevronLeft
                    className="md:block text-white text-[40px] text-bold absolute mt-4 cursor-pointer z-10"
                    onClick={handleLeftClick} // Add onClick event
                />
                <HiChevronRight
                    className='md:block text-white text-[40px] absolute mt-4 cursor-pointer right-0 z-10'
                    onClick={handleRightClick} // Add onClick event
                />
                <div className="relative flex w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-none"
                    ref={sliderRef}> {/* Attach the ref */}
                    {movies.map((movie) => (
                        <MovieCardTmdb key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;