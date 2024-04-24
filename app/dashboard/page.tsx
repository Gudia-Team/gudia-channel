import { fetchGenreMovies } from "@/actions/movieData";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";
import CategoryList from "../components/CategoryList";
import { Genre } from "@/models/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SearchMovies from "../components/SearchMovies";



export default async function DashboardPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const genres = await fetchGenreMovies();


    return (
        <div className="p-3 lg:p-0 overflow-hidden ">
            <MovieVideo />
            <SearchMovies />
            <section className="container mb-[50px] z-20 top-0 items-center text-center text-primary overflow-hidden">
                <h2 className="item-center text-center font-extrabold text-8xl">10 TOP MOVIES</h2>
            </section>
            <RecentlyAdded />
            <div className="all-movies">
                {genres.map((genre: Genre) => (
                    <CategoryList key={genre.id} title={genre.name} movies={genre.movies} />
                ))}
            </div>
        </div>
    )
}
