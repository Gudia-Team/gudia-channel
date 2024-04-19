"use client";
import { Genre, Movie, Video } from "@/models/types"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    movie: Movie;
    closeModel: () => void;
}
interface User {
    email: string;
    username: string;
    favorites: number[];
}

export default function Modal({ movie, closeModel }: Props) {
    const router = useRouter();

    const [video, setVideo] = useState("");
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
    };
    const getMovieDetails = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`,
                options
            );
            const data = await res.json();

            if (data?.videos) {
                const index = data.videos.results.findIndex(
                    (video: Video) => video.type === "Trailer"
                );
                setVideo(data.videos.results[index].key);
            }
        } catch (err) {
            console.log("Error fetching movie details", err);
        }
    };

    useEffect(() => {
        getMovieDetails();
    }, [movie]);

    return (
        <div className="modal">

        </div>
    )
}
