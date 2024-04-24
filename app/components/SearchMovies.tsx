"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsSearchHeart } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";

export default function SearchMovies() {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");


    return (
        <section className="container flex gap-4 mb-[10px] z-20 items-center text-center text-primary opacity-50 overflow-hidden">
            <span className="item-center text-center font-extrabold text-2xl">
                <RiMovie2Fill size={30}/>
            </span>
            <input
                type="text"
                placeholder="Search Movies"
                value={search}
                width={100}
                height={100}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 border border-primary rounded-md"
            />
            <button
                onClick={() => router.push(`/search/${search}`)}
                className="bg-primary text-white p-3 rounded-md  "
            >
                <BsSearchHeart 
                size={30}
                color='red'
                />
            </button>
        </section>
    )
}
