"use client";
import { useState } from "react";

export default function ContactForm() {
  const [input, setInput] = useState("");

  return (
    <div className="isolate bg-gray-900 relative z-10">
      {" "}
      {/* Ensure the main container has higher z-index */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-20 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-4 max-w-xl relative z-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-semibold text-white"
            >
              Full Name
            </label>
            <div className="mt-2.5 lg:w-[36rem]">
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="given-name"
                placeholder="Enter your full name"
                className="block w-full rounded-md bg-black px-4 py-3 text-base text-white placeholder:text-gray-400 sm:px-6 sm:py-4 sm:text-lg lg:px-8 lg:py-5 lg:text-xl focus:outline focus:outline-2 focus:outline-indigo-600"
                value={input}
                onChange={(e) => {
                  console.log(e.target.value);
                  setInput(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows={4}
                className="block w-full rounded-md bg-black px-4 py-3 text-base text-white placeholder:text-gray-400 sm:px-6 sm:py-4 sm:text-lg lg:px-8 lg:py-5 lg:text-xl focus:outline focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-base lg:text-lg lg:px-8 lg:py-4"
          >
            {"let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}
