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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <h1>Movie for `{query}`</h1>
            <div className="">
                {searchedMovies.map((movie) => (
                    <MovieCardTmdb key={movie.id} movie={movie} />

                ))}

            </div>
        </div>
    )
}

export default SearchResults