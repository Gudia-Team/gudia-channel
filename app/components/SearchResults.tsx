import { searchMovies } from "@/actions/movieData"
import { Movie } from "@/models/types"
import Image from "next/image"
import MovieCardTmdb from "./MovieCardTmdb"


const SearchResults = async ({ query }: { query: string }) => {
    let searchedMovies: Movie[] = []
    searchedMovies = await searchMovies(query)

    return searchedMovies.length === 0 ? (
        <div className="text-center text-primary">No movies found</div>
    ) : (
        <div className="container flex flex-wrap overflow-hidden">

            <div>
                <h1 className="text-center font-medium lg:text-4-xl md:text-3xl">
                    Search for Movies
                    *{query}*
                </h1>
                <div className="container flex flex-wrap gap-2">
                    {searchedMovies.map((movie) => (
                        <div className="w-full md:w-1/6 h-auto" key={movie.id}>
                            <MovieCardTmdb key={movie.id} movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults