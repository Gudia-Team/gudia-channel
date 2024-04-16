import { Button } from "@/components/ui/button"
import prisma from "../lib/db"

export default function SeedDatabase() {
    async function postData() {
        "use server";
        await prisma.movie.createMany({
            data: [
                {
                    "id": 0,
                    "title": "Stranger Things",
                    "age": 16,
                    "duration": 0.8,
                    "imageString": "https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
                    "overview": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
                    "release": 2016,
                    "videoSource": "",
                    "category": "show",
                    "youtubeString": "https://www.youtube.com/embed/mnd7sFt5c3A"
                },
                {
                    "id": 12,
                    "title": "Breaking Bad",
                    "age": 18,
                    "duration": 0.47,
                    "imageString": "https://image.tmdb.org/t/p/original/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg",
                    "overview": "A high school chemistry teacher turned methamphetamine manufacturing drug dealer teams with a former student to create the purest meth on the market.",
                    "release": 2008,
                    "videoSource": "",
                    "category": "show",
                    "youtubeString": "https://www.youtube.com/embed/HhesaQXLuRY"
                },
                {
                    "id": 13,
                    "title": "Inception",
                    "age": 13,
                    "duration": 2.28,
                    "imageString": "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                    "overview": "A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
                    "release": 2010,
                    "videoSource": "",
                    "category": "movie",
                    "youtubeString": "https://www.youtube.com/embed/YoHD9XEInc0"
                },
                {
                    "id": 14,
                    "title": "The Matrix",
                    "age": 16,
                    "duration": 2.16,
                    "imageString": "https://image.tmdb.org/t/p/original/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
                    "overview": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                    "release": 1999,
                    "videoSource": "",
                    "category": "movie",
                    "youtubeString": "https://www.youtube.com/embed/m8e-FF8MsqU"
                },
                {
                    "id": 15,
                    "title": "Avatar",
                    "age": 13,
                    "duration": 2.42,
                    "imageString": "https://image.tmdb.org/t/p/original/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
                    "overview": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                    "release": 2009,
                    "videoSource": "",
                    "category": "movie",
                    "youtubeString": "https://www.youtube.com/embed/5PSNL1qE6VY"
                },
                {
                    "id": 16,
                    "title": "Interstellar",
                    "age": 12,
                    "duration": 2.49,
                    "imageString": "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    "overview": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                    "release": 2014,
                    "videoSource": "",
                    "category": "movie",
                    "youtubeString": "https://www.youtube.com/embed/zSWdZVtXT7E"
                },
                {
                    "id": 17,
                    "title": "The Witcher",
                    "age": 18,
                    "duration": 1,
                    "imageString": "https://image.tmdb.org/t/p/original/34FaY8qpjBAVysSfrJ1l7nrAQaD.jpg",
                    "overview": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
                    "release": 2019,
                    "videoSource": "",
                    "category": "show",
                    "youtubeString": "https://www.youtube.com/embed/ndl1W4ltcmg"
                },
                {
                    "id": 18,
                    "title": "The Dark Knight",
                    "age": 13,
                    "duration": 2.32,
                    "imageString": "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                    "overview": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                    "release": 2008,
                    "videoSource": "",
                    "category": "movie",
                    "youtubeString": "https://www.youtube.com/embed/EXeTwQWrcwY"
                },
                {
                    "id": 19,
                    "title": "Game of Thrones",
                    "age": 18,
                    "duration": 1,
                    "imageString": "https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
                    "overview": "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
                    "release": 2011,
                    "videoSource": "",
                    "category": "show",
                    "youtubeString": "https://www.youtube.com/embed/BpJYNVhGf1s"
                },
                {
                    "id": 20,
                    "title": "Guardians of the Galaxy",
                    "age": 12,
                    "duration": 2.1,
                    "imageString": "https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
                    "overview": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
                    "release": 2014,
                    "videoSource": "",
                    "category": "movie",
                    "youtubeString": "https://www.youtube.com/embed/d96cjJhvlMA"
                },
            ]
        });
    }

    return (
        <div className="m-5">
            <form action={postData}>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}