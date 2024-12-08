import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            We are dedicated to empowering aspiring developers and technology
            enthusiasts to master the art of programming. Whether you are just
            starting out or looking to advance your skills, our expert
            instructors and hands-on courses are designed to help you excel in
            the ever-evolving tech world. Join our dynamic community and unlock
            your potential to build, innovate, and create. Start your coding
            journey with us today!
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-white text-lg font-semibold">Follow Us</h2>
          <ul className="flex flex-col gap-2">
            <Link href={"/"}>Beginner Programming</Link>
            <Link href={"/"}>Advanced Algorithms</Link>
            <Link href={"/"}>Full-Stack Development</Link>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-white text-lg font-semibold">Contact Us</h2>
          <ul className="flex flex-col gap-2 sm:flex-row">
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Twitter</Link>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-white text-lg font-semibold">Contact Us</h2>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@musicschool.com
          </p>
          <p>
            <strong>Address:</strong> 123 Harmony Lane, Melody City, Music State
          </p>
        </div>
      </div>
      <p className="text-center text-sm pt-8">
        {" "}
        &copy; 2024 Code School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
