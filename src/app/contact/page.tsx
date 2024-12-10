"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ContactForm from "@/components/ContactForm";
function Contact() {
  return (
    <footer className="h-[100dvh] bg-gray-900 py-12 pt-36">
      <div>
        <h2 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h2>
        <p className="text-center my-4 lg:w-[35rem] mx-auto">
          We are here to help with any questions about our courses, programs ,
          or events. Reach out and let us know how we can assist you in your
          coding journey.
        </p>
        <ContactForm />
      </div>
      <BackgroundBeams />
    </footer>
  );
}

export default Contact;
