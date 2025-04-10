/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Genre, Movie, Video } from "../../models//types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface Props {
    movie: Movie;
    closeModal: () => void;
}

interface User {
    email: string;
    username: string;
    favorites: number[];
}

const Modal = ({ movie, closeModal }: Props) => {
    const router = useRouter();

    const [video, setVideo] = useState("");
    const [genres, setGenres] = useState<Genre[]>([]);



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

            if (data?.genres) {
                setGenres(data.genres);
            }
        } catch (err) {
            console.log("Error fetching movie details", err);
        }
    };

    useEffect(() => {
        getMovieDetails();
    }, [getMovieDetails, movie]);




    return (

        <Dialog open >
            <DialogTrigger onClick={closeModal}>
                <DialogContent className="sm:max-w-[425px] items-center object-cover ">
                    <DialogHeader>
                        <DialogTitle>
                            <div className="flex justify-between text-primary">
                                <div className="flex gap-2">
                                    <p className="text-base-bold">Name:</p>
                                    <p className="text-base-light">{movie?.title || movie?.name}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 text-primary">
                                <p className="text-base-bold">Release Date:</p>
                                <p className="text-base-light">{movie?.release_date}</p>
                            </div>

                        </DialogTitle>
                        <DialogDescription className="line-clamp-3 ">
                            <p className="text-base-light">{movie?.overview}</p>
                        </DialogDescription>
                    </DialogHeader>
                    <iframe
                        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1`}
                        className="relative w-full  object-cover items-center justify-center"
                        loading="lazy"
                        allowFullScreen
                        height={400}

                    />
                    <div className="relative flex flex-col border py-2 px-1 rounded">
                        <p className="text-yellow-500">Rating:</p>
                        <p className="text-red-600">{movie?.vote_average}</p>
                        <p className="text-green-500">Genres:</p>
                        <p className="text-base-light font-bold">
                            {genres.map((genre) => genre.name).join(", ")}
                        </p>
                    </div>
                </DialogContent>
            </DialogTrigger>
        </Dialog>


    );
};

export default Modal;
