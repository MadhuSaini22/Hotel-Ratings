import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";
import Image from "next/image";

const Card = ({ hotel }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  // This is component for rendering individual card
  return (
    <>
      {isLoading ? (
        <div className="">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={4} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          href={`/hotelDetail/${hotel.id}`}
          className="flex justify-center items-center"
        >
          <div className="!inline-block transition duration-300 ease-in-out relative rounded overflow-hidden cursor-pointer z-0  ">
            <Image
              className=" "
              src={`${hotel.image}`}
              alt="img"
              width="188"
              height="282"
            />
            <div className=" absolute p-3 bottom-0 h-72 flex flex-col w-10/12 justify-end opacity-0 hover:opacity-100">
              <div className=" text-base font-black mb-1.5">{hotel.name}</div>
              <div className=" text-xs m-1">
                <span className="float-right">
                  {hotel.ratings} <i className="fas fa-star"></i>{" "}
                </span>
              </div>
              <div className="truncate">
                {hotel.description.slice(0, 118) + "..."}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Card;
