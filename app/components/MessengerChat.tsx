"use client";

import { useState } from "react";
import Image from "next/image";


interface iAppProps {
    data: {
        message: string;
        User: {
            name: string;
            email: string;
            image: string;
        }
    }[];
}



export default function MessengerChat({ data }: iAppProps) {
    const [totalComments, setTotalComments] = useState(data);
    return (
        <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
            <div className="flex flex-col gap-4">
                {totalComments.map((message, index) => (
                    <div key={index}>
                        <div className="flex items-center">
                            {message.User.image ? (
                                <Image
                                    src={message.User.image as string}
                                    alt="Profile image of user"
                                    className="w-12 h-12 object-cover rounded-lg mr-4"
                                    width={50}
                                    height={50}
                                />
                            ) : (
                                <div className="w-12 h-12 rounded-lg bg-gray-300 mr-4"></div>
                            )}
                            <div className="rounded-lg bg-black p-4 shadow-md self-start">
                                {message.message}
                            </div>
                        </div>
                        <p className="font-light text-sm text-gray-600">
                            {message.User.name}
                        </p>
                    </div>
                ))}
                {/* <div ref={messageEndRef}></div> */}
            </div>
        </div>
    );
}
