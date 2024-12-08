"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const upcomingWebinars = [
  {
    title: "Mastering the Basics of Rust Programming",
    description:
      "Join us for an in-depth webinar on Rust, focusing on ownership, lifetimes, and building safe and efficient applications.",
    slug: "mastering-the-basics-of-rust",
    isFeatured: true,
  },
  {
    title: "Introduction to Functional Programming with Elixir",
    description:
      "Learn the fundamentals of functional programming, pattern matching, and process handling using Elixir in this beginner-friendly session.",
    slug: "functional-programming-with-elixir",
    isFeatured: false,
  },
  {
    title: "Building Scalable Applications with Go",
    description:
      "Discover how to use Go (Golang) to build highly scalable and efficient backend services in this practical webinar.",
    slug: "building-scalable-applications-with-go",
    isFeatured: true,
  },
  {
    title: "Kotlin for Android Developers",
    description:
      "Explore how to use Kotlin to create modern, responsive, and feature-rich Android applications. Perfect for developers of all levels.",
    slug: "kotlin-for-android-developers",
    isFeatured: false,
  },
  {
    title: "Advanced Type Systems with Scala",
    description:
      "Delve into Scala's advanced type systems, functional programming paradigms, and how to use them to write concise and powerful code.",
    slug: "advanced-type-systems-with-scala",
    isFeatured: true,
  },
  {
    title: "Game Development Scripting with Lua",
    description:
      "Learn how to use Lua for game scripting, including handling events, creating interactive gameplay, and optimizing game performance.",
    slug: "game-development-scripting-with-lua",
    isFeatured: false,
  },
];

function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <div className="text-center">
            <h2 className=" text-base text-teal-600 font-semibold tracking-wide uppercase ">
              Featured Webinars
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"></p>
          </div>
          <div className="mt-10">
            {/* Hack */}
            <HoverEffect
              items={upcomingWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: webinar.slug,
              }))}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/courses"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
