"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Rustaceans Hub",
    description:
      "Master Rust programming with our expert-led courses focusing on safety, concurrency, and system-level development.",
  },
  {
    title: "Elixir Enthusiasts Academy",
    description:
      "Dive into functional programming with Elixir, covering pattern matching, concurrent programming, and Phoenix framework.",
  },
  {
    title: "Go Gurus Training Center",
    description:
      "Specializing in backend development, our Go courses teach you how to build efficient and scalable applications.",
  },
  {
    title: "Kotlin Craftsmanship Academy",
    description:
      "Learn Kotlin to develop modern Android apps, including jetpack components, coroutines, and clean architecture.",
  },
  {
    title: "Scala Scholars Institute",
    description:
      "A premier institute for mastering Scala’s advanced type system, functional programming, and big data applications.",
  },
  {
    title: "Lua Legends Workshop",
    description:
      "Focused on game scripting and embedded systems, our Lua courses help you create interactive and optimized programs.",
  },
  {
    title: "Functional Foundations Studio",
    description:
      "Explore the principles of functional programming using popular languages like Elixir, Scala, and Kotlin.",
  },
  {
    title: "Concurrency Experts Guild",
    description:
      "Specialized training on building concurrent and parallel systems using languages like Rust and Go.",
  },
  {
    title: "Game Scripting School",
    description:
      "Master game scripting techniques with Lua, focusing on event handling, AI scripting, and optimization.",
  },
  {
    title: "Cloud Coders Academy",
    description:
      "Learn how to use languages like Go and Rust to build cloud-native applications with a focus on performance and scalability.",
  },
];

function WhyChooseUs() {
  return (
    <main>
      <StickyScroll content={content} />
    </main>
  );
}

export default WhyChooseUs;
