import React from "react";
import Link from "next/link";
import Image from "next/image";
export const ResultCard = ({ movie }) => {
  return (
    <Link
      href={`/movieDetail/${movie.id}`}
      className="flex bg-white justify-center items-center"
    >
      {/* search box card in header */}
      <div className="grid grid-cols-12 gap-2  border-t border-gray-500">
        <div className="col-span-1 p-2">
          {movie.poster_path ? (
            <Image
              className="max-w-100"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              width="50"
              height="75"
            />
          ) : (
            <div className="" />
          )}
        </div>

        <div className="col-span-11 justify-start flex items-center">
          <div className="">
            <h3 className="">{movie.title}</h3>
            <h4 className="text-sm text-gray-400"></h4>
            <p className="text-sm text-gray-400 ">{movie.original_title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
