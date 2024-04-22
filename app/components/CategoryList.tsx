import { Movie } from "@/models/types";
import MovieCardTmdb from "./MovieCardTmdb";

interface Props {
    title: string;
    movies:Movie[];
}

export default function CategoryList({ title, movies }: Props) {
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <h1 className="text-primary txt-md md:text-xl lg:text-2xl font-semibold">{title}</h1>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mb-5 -mt-10">
                {movies.map((movie) => (
                    <MovieCardTmdb key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    )
}
