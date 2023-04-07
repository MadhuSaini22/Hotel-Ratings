import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { hotelData } from "@/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const product = {
  images: [
    {
      src: "/assets/royal.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "/assets/hotel2.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "/assets/hotel3.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "/assets/hotel4.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
};

export default function Detail() {
  const router = useRouter();

  let hotel;
  hotel = hotelData.find((p) => p.id == router.query.hotelId);

  const value = hotel?.ratings;
  const maxRating = 5;
  const rating = Math.max(0, Math.min(maxRating, value));
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <Link
                href={"/allData"}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Back
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              height={"300"}
              width={"300"}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                height={"300"}
                width={"300"}
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                height={"300"}
                width={"300"}
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              height={"300"}
              width={"300"}
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {hotel?.name}
            </h1>
          </div>

          <div className=" lg:col-span-2 lg:col-start-1 lg:border-gray-200 mb-6">
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{hotel?.description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8">
            <h1 className="text-sm font-medium tracking-tight text-gray-900">
              <p className="mb-3">ratings</p>

              <div className="flex">
                {fullStars &&
                  [...Array(fullStars)].map((_, index) => (
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
                {emptyStars &&
                  [...Array(emptyStars)].map((_, index) => (
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
              <div>
                <button className="my-8">
                  <Link
                    href={`${hotel?.url}`}
                    className="px-6 text-sm bg-yellow-400 py-3 "
                  >
                    Get more details
                  </Link>
                </button>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
