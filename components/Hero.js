import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="pb-4 xl:pb-14 container">
      <div className="shadow-l bg-home bg-[50%_65%]">
        <div className="container flex items-center pt-20 justify-start flex-col">
          <p className="text-sm text-center leading-4 sm:leading-10 sm:text-[42px]  text-white font-bold max-w-[745px] mb-10">
            Explore the most highly-rated hotels for your next stay
          </p>
          <Link
            href="/contact-us"
            className="bg-yellow-400 transition duration-300 hover:text-white text-sm md:text-lg py-4 sm:py-[18px] px-5 sm:px-10 hover:bg-warning-500 mb-10 text-black rounded-full"
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
}
