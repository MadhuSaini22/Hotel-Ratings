import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const WatchListCard = ({ hotel }) => {
  // This is component for rendering individual card
  const value = hotel.ratings;
  const maxRating = 5;
  const rating = Math.max(0, Math.min(maxRating, value));
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("hotels");
    if (data) {
      const data1 = JSON.parse(data);
      const exist = data1.find((item) => item.id == hotel.id);
      exist ? setSelected(true) : setSelected(false);
    }
  }, [hotel]);

  const addToWatchlist = (hotel) => {
    const hotels = JSON.parse(localStorage.getItem("hotels"));

    if (!selected) {
      if (hotels) {
        hotels.push(hotel);
        setSelected(true);
        const stringData = JSON.stringify(hotels);
        localStorage.setItem("hotels", `${stringData}`);
      } else {
        let hotels = [];
        hotels.push(hotel);
        const stringData = JSON.stringify(hotels);
        localStorage.setItem("hotels", `${stringData}`);
      }
    }
  };

  return (
    <div>
      {/* <Link href={`/hotelDetail/${hotel.id}`}> */}
      <div className="bg-white w-[400px] shadow-lg rounded-lg overflow-hidden mx-auto max-w-[500px]">
        <div className="relative">
          <Link href={`/hotel/${hotel.id}`}>
            <Image
              className="w-full h-56 object-cover object-center"
              src="/assets/room.jpg"
              alt="hotel"
              height={"300"}
              width={"300"}
            />
          </Link>

          <div>
            <button
              className="z-[9]"
              onClick={() => {
                addToWatchlist(hotel);
              }}
            >
              <div>
                {selected == false ? (
                  <svg
                    className="ipc-watchlist-ribbon__bg h-8 w-11 absolute overflow-hidden top-0 left-0 text-3xl  "
                    width="27px"
                    height="34px"
                    viewBox="0 0 24 34"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <polygon
                      className="ipc-watchlist-ribbon__bg-ribbon relative w-full h-auto "
                      fill="black"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                      style={{ opacity: "0.7" }}
                    ></polygon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="ipc-icon ipc-icon--add ipc-icon--inline"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      style={{ fontWidth: "15px" }}
                      role="presentation"
                    >
                      <path
                        className="w-5"
                        d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                      ></path>
                    </svg>

                    <polygon
                      className="ipc-watchlist-ribbon__bg-shadow bg-black/30 text-white"
                      points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                      style={{ opacity: "0.7" }}
                    ></polygon>
                  </svg>
                ) : (
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
                )}
              </div>
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex">
            {[...Array(fullStars)].map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
            {hasHalfStar && (
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <defs>
                  <mask id="half-mask">
                    <rect x="0" y="0" width="50%" height="100%" fill="white" />
                  </mask>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  fill="yellow"
                  mask="url(#half-mask)"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            )}
            {[...Array(emptyStars)].map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </div>
          <div className="text-gray-700 text-medium my-2">{hotel.name}</div>

          <div className="text-gray-600 text-sm my-2">{hotel.description}</div>
          <a
            href={`${hotel.url}`}
            target="_blank"
            className="text-gray-600 text-sm"
          >
            <div className="font-semibold underline">Have a glimpse</div>
          </a>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
export default WatchListCard;
