import Image from "next/image";
import Link from "next/link";
import React from "react";


const Card = ({ hotel }) => {
  // This is component for rendering individual card
  const value = hotel.ratings;
  const maxRating = 5;
  const rating = Math.max(0, Math.min(maxRating, value));
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      {/* <Link href={`/hotelDetail/${hotel.id}`}> */}
      <div className="bg-white w-[400px] shadow-lg rounded-lg overflow-hidden mx-auto max-w-[500px]">
        <Link href={`/hotel/${hotel.id}`} >
          <Image
            className="w-full object-cover object-center"
            src="/assets/room.jpg"
            alt="hotel"
            height={"300"}
            width={"300"}
          />
        </Link>
        <div className="flex flex-col h-[calc(100%-150px)] justify-between px-4 pt-4 pb-8">
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
                      <rect
                        x="0"
                        y="0"
                        width="50%"
                        height="100%"
                        fill="white"
                      />
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

            <div className="text-gray-600 line-clamp-2 text-sm my-2">
              {hotel.description}
            </div>
            <a
              href={`${hotel.url}`}
              target="_blank"
              className="text-gray-600 text-sm"
            >
              <div className="font-semibold underline">Have a glimpse</div>
            </a>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
export default Card;
