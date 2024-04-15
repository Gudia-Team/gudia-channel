import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";


export default function DashboardPage() {
    return (
        <div className="p-3 lg:p-0">

            <MovieVideo />
            <RecentlyAdded />
        </div>
    )
}
