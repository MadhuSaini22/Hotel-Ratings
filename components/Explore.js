import React from "react";
import Card from "./Card";
import { hotelData } from "@/constants";

export default function Explore() {
  let counter = 18;
  const arr = [...Array(counter).keys()];

  return (
    <div className="container my-5">
      {hotelData.length > 0 ? (
        <div className="justify-center items-center">
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 ">
            {hotelData.map((hotel) => (
              <Card key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      ) : (
        <div className="justify-center items-center animate-pulse  ">
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 ">
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
    </div>
  );
}
