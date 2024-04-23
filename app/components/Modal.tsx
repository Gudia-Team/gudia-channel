/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Genre, Movie, Video } from "../../models//types";
import { AddCircle, CancelRounded, RemoveCircle } from "@mui/icons-material";
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
        <>
            <Dialog>
                <DialogTrigger>
                    open
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] items-center text-primary object-cover">
                    <DialogHeader>
                        <DialogTitle>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <p className="text-base-bold">Name:</p>
                                    <p className="text-base-light">{movie?.title || movie?.name}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-base-bold">Release Date:</p>
                                <p className="text-base-light">{movie?.release_date}</p>
                            </div>

                        </DialogTitle>
                        <DialogDescription className="line-clamp-3">
                            <p className="text-base-light">{movie?.overview}</p>
                        </DialogDescription>
                    </DialogHeader>
                    <iframe
                        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1`}
                        className="relative w-full h-196 object-cover items-center justify-center"
                        loading="lazy"
                        allowFullScreen
                        width={800}
                        height={400}
                    />
                    <div className="relative flex flex-col">
                        <p className="text-base-bold">Rating:</p>
                        <p className="text-base-light">{movie?.vote_average}</p>
                        <p className="text-base-bold">Genres:</p>
                        <p className="text-base-light">
                            {genres.map((genre) => genre.name).join(", ")}
                        </p>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    );
};

export default Modal;

// <div className="modal">
//     <button className="modal-close" onClick={closeModal}>
//         <CancelRounded
//             sx={{ color: "white", fontSize: "35px", ":hover": { color: "red" } }}
//         />
//     </button>

//     <iframe
//         src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1`}
//         className="modal-video"
//         loading="lazy"
//         allowFullScreen
//     />

//     <div className="modal-content">
//         <div className="flex justify-between">
//             <div className="flex gap-2">
//                 <p className="text-base-bold">Name:</p>
//                 <p className="text-base-light">{movie?.title || movie?.name}</p>
//             </div>
//         </div>
//         <div className="flex gap-2">
//             <p className="text-base-bold">Release Date:</p>
//             <p className="text-base-light">{movie?.release_date}</p>
//         </div>

//         <p className="text-base-light">{movie?.overview}</p>

//         <div className="flex gap-2">
//             <p className="text-base-bold">Rating:</p>
//             <p className="text-base-light">{movie?.vote_average}</p>
//         </div>

//         <div className="flex gap-2">
//             <p className="text-base-bold">Genres:</p>
//             <p className="text-base-light">
//                 {genres.map((genre) => genre.name).join(", ")}
//             </p>
//         </div>
//     </div>
// </div>