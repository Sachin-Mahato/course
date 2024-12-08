"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "CodeCraft Academy transformed the way I approach programming. The instructors made complex topics like algorithms and data structures easy to understand. Highly recommended!",
    name: "Emma Johnson",
    title: "Game-Changing Learning Experience",
  },
  {
    quote:
      "DevMaster Institute is the best place to learn web development. The hands-on projects and real-world examples helped me land my first job as a frontend developer!",
    name: "Liam Carter",
    title: "Launchpad for Web Developers",
  },
  {
    quote:
      "AI Pro Academy exceeded my expectations. The Python and machine learning courses were in-depth and practical. I've built several AI models thanks to their training.",
    name: "Sophia Martinez",
    title: "Mastering AI and Machine Learning",
  },
  {
    quote:
      "Rust Wizards Bootcamp was exactly what I needed to dive into system-level programming. The examples were practical, and I feel confident working on low-level code now.",
    name: "Noah Thompson",
    title: "Deep Dive into System Programming",
  },
  {
    quote:
      "Functional Programming Lab taught me how to think differently about coding. Their Scala and Elixir courses are outstanding for anyone looking to master functional programming.",
    name: "Olivia Brown",
    title: "Revolutionary Programming Mindset",
  },
  {
    quote:
      "GoLang Gurus was incredible! The courses are well-structured, and the projects helped me build scalable applications with ease.",
    name: "William Davis",
    title: "Mastering Go with Ease",
  },
  {
    quote:
      "Mobile App Development Hub taught me Kotlin from scratch. I can now confidently build Android apps, and the support from the instructors was phenomenal.",
    name: "Isabella Wilson",
    title: "Building Android Apps Like a Pro",
  },
  {
    quote:
      "Scripting with Lua Academy helped me take my game development projects to the next level. The course was fun, engaging, and incredibly practical.",
    name: "James Anderson",
    title: "Leveling Up Game Development",
  },
  {
    quote:
      "The Full-Stack Developer Academy prepared me for real-world challenges. From frontend to backend, they covered everything I needed to know.",
    name: "Charlotte Miller",
    title: "Comprehensive Full-Stack Training",
  },
  {
    quote:
      "Code Innovators Studio has an inspiring environment for developers of all levels. Their projects and peer interactions pushed me to grow as a programmer.",
    name: "Benjamin Garcia",
    title: "Inspiring and Practical Learning",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Code in Harmony: Success Stories
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
