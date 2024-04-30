"use client";
import { postData } from "@/app/action";
import { useRef } from "react";

export default function MessengerForm() {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <form
            action={async (formData) => {
                await postData(formData);
                formRef.current?.reset();
            }}
            ref={formRef}
            className="p-6 fixed bottom-0 left-0 w-full bg-white"
        >
            <div className="flex">
                <input type="text" name="message" placeholder="Type a message"
                    className="w-full flex-grow p-2 outline-none border border-gray-300 rounded-lg"
                />
                <button type="submit" className="bg-yellow-500 hover:bg-teal-600 text-white p-2 rounded-lg ml-2">Send</button>
            </div>

        </form>
    )
}
