
export type Video = {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
    genre: string;
    duration: string;
    releaseDate: string;
    age: number;
    watchlist: boolean;
    watchlistId: string;
    user: {
        id: number;
        email: string;
        name: string;
    };
    sessions: {
        id: number;
        userId: string;
        expires: string;
        sessionToken: string;

    };

};

export interface movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
