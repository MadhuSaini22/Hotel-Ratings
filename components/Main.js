import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import { hotelData } from "@/constants";

export default function Main() {
   let counter = 18;
   const arr = [...Array(counter).keys()];
  return (
    <div className="container">
      <Hero />
      <h1 className="">
        {hotelData.length > 0 ? (
          <div className="justify-center items-center">
            <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 ">
              {hotelData.map((hotel) => (
                <Card key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        ) : (
          <div className="justify-center items-center animate-pulse  ">
            <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 ">
              {arr.map((index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    className="rounded bg-slate-800 h-64 !w-48"
                  ></div>
                );
              })}
            </div>
          </div>
        )}
      </h1>
    </div>
  );
}
