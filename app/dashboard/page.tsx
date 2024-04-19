import { fetchGenreMovies } from "@/actions/movieData";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";
import CategoryList from "../components/CategoryList";
import { Genre } from "@/models/types";


export default async function DashboardPage() {
    const genres = await fetchGenreMovies();
    const exampel = genres.slice(0, 2)
    console.log(exampel);
    return (
        <div className="p-3 lg:p-0 ">

            <MovieVideo />
            <RecentlyAdded />
            <div className="all-movies">
                {exampel.map((genre: Genre) => (
                    <CategoryList key={genre.id} title={genre.name} movies={genre.movies} />
                ))}

            </div>
        </div>
    )
}
