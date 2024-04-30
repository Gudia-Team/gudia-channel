"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Pusher from "pusher-js";


interface iAppProps {
    data: {
        message: string;
        User: {
            name: string | null;
            email: string | null;
            image: string | null;
        }
    }[];
}



export default function MessengerChat({ data }: iAppProps) {
    const [totalComments, setTotalComments] = useState(data);
    const messageEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
            cluster: 'eu'
        });
        var channel = pusher.subscribe('chat');
        channel.bind('hello', function (data: any) {
            const parsedComments = JSON.parse(data.message);
            setTotalComments((prev) => [...prev, parsedComments])

        });
        return () => {
            pusher.unsubscribe("chat");
        };

    }, []);


    const scrollTobottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollTobottom();
    }, [totalComments]);

    return (
        <div className="container flex-grow max-h-screen overflow-y-auto">
            <div className="flex flex-col gap-4">
                {totalComments.map((message, index) => (
                    <div key={index}>
                        <div className="container flex items-center">

                            <div className="rounded-full font-bold border border-blue-300 p-2 text-primary">

                                {message.User.name}

                            </div>
                            <p className="rounded-lg bg-none p-4 shadow-md self-start">
                                {message.message}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messageEndRef}></div>
            </div>
        </div>
    );
}
