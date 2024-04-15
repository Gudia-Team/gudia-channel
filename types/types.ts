
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
