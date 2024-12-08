"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection() {
  return (
    <div className="w-full flex h-auto flex-col justify-center items-center md:h-[40rem] md:my-0 rounded-md overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" mt-20 p-4 relative z-10 w-full text-center">
        <h1 className="capitalize md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Coding
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Mastering the art of coding is a journey that combines
          problem-solving, logical thinking, and a profound understanding of
          programming concepts and languages. It requires dedication, consistent
          practice, and a passion for creating innovative solutions.
        </p>

        <div className="mt-4">
          <Link href={"/course"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
