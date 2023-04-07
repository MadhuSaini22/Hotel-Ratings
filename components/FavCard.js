import Image from "next/image";
import React, { useEffect, useState } from "react";
import RemoveFav from "./RemoveFav";

export default function FavCard({ hotel, setFlag }) {
  const [removeItem, setRemoveItem] = useState(false);

  const removeMovieFromWatchlist = () => {
    const data = localStorage.getItem("hotels");
    if (data) {
      const data1 = JSON.parse(data);
      if (data) {
        const exist = data1.find((item) => item.id == hotel.id);
        if (exist) {
          const updatedData = data1.filter((obj) => obj.id != hotel.id);
          localStorage.setItem("hotels", JSON.stringify(updatedData));
          setRemoveItem(true);
          setFlag(true);
        }
      }
    }
  };
  return (
    <div>
      <div>
        <div className="relative  grid grid-cols-5 gap-2 text-dark-forgot border-b m-4 border-gray-500">
          <div className=" col-span-1 p-1">
            <Image
              className=""
              src={`/assets/room.jpg`}
              alt={`poster`}
              width="101"
              height="152"
            />
          </div>

          <div className="col-span-4 font-coverFont">
            <div className="">
              <h3 className="text-dark-forgot mt-1 ">{hotel.name}</h3>

              <div className="text-xs text-gray-700">⭐{hotel.ratings}</div>

              <div className="text-xs line-clamp-3 text-gray-700 font-coverFont leading-4">
                {hotel.description}
              </div>
            </div>
          </div>
          <div className="">
            <>
              <button
                className="absolute left-0 top-0 "
                onClick={() => removeMovieFromWatchlist()}
              >
                <svg
                  className="ipc-watchlist-ribbon__bg h-8 w-11 absolute overflow-hidden    top-0 left-0 text-3xl "
                  width="27px"
                  height="34px"
                  viewBox="0 0 24 34"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                >
                  <polygon
                    className="ipc-watchlist-ribbon__bg-ribbon relative w-full h-auto "
                    fill="rgb(245,197,24)"
                    points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                  ></polygon>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="30"
                    className="ipc-icon ipc-icon--done ipc-icon--inline"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path>
                  </svg>
                  <polygon
                    className="ipc-watchlist-ribbon__bg-shadow bg-black/30 text-white"
                    points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                    style={{ opacity: "0.2" }}
                  ></polygon>
                </svg>
              </button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
