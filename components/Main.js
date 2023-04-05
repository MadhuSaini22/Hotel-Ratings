import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Popular from "./Popular";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="container">
      <Hero />
      <Popular />
      <div className="bg-gray-200 grid grid-cols-2 grid-flow-row mb-6">
        <div className="col-span-1 p-5">
          <h1 className="text-2xl">Explore more for your next trip</h1>
          <p className="mb-8">
            Embark on an adventure of a lifetime - Discover more for your next
            trip!
          </p>
          <Link href={"/allData"}>
            <button className="bg-black hover:bg-yellow-400 text-white hover:text-black px-6 py-3 rounded-xl">
              See the list
            </button>
          </Link>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <Image
            src="/assets/travel.jpg"
            width={"600"}
            alt=""
            height={"500"}
            className="h-44"
          />
        </div>
      </div>
    </div>
  );
}
