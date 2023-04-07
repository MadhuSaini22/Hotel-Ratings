import FavCard from "@/components/FavCard";
import React, { useEffect, useState } from "react";

export default function Favourite() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("ratings");
  const [flag, setFlag] = useState(false);
  const [flagX, setFlagX] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("hotels");
    if (data) {
      const data1 = JSON.parse(data);
      data1 && setOriginalData(Array.from(new Set(data1)));
    }
    setFlag(false);
    setFlagX(true);
  }, [flag, flagX]);

  useEffect(() => {
    originalData.length > 0 &&
      setData(
        originalData.sort((a, b) => {
          if (sortType === "name") {
            return a.name.localeCompare(b.name);
          } else if (sortType === "ratings") {
            return b.ratings - a.ratings;
          } else {
            return 0;
          }
        })
      );
  }, [originalData, sortType]);

  const sortArray = (type) => {
    const sorted = data.sort((a, b) => {
      if (type === "name") {
        return a.name.localeCompare(b.name);
      } else if (type === "ratings") {
        return b.ratings - a.ratings;
      } else {
        return 0;
      }
    });
    setData(sorted);
    setFlag(false);
  };

  return (
    <div className="container">
      <div className="min-h-screen justify-center flex">
        {/* watchlist page */}
        {originalData.length > 0 ? (
          <div className="container  justify-center font-coverFont flex">
            <div className="max-w-5xl">
              <div className="lg:grid  lg:grid-cols-5 lg:gap-1 md:grid  md:grid-cols-5 md:gap-1 sm:grid  sm:grid-cols-5 sm:gap-1">
                <div className="bg-gray-100 col-span-3">
                  <h1 className="text-gray-800  pl-5 text-2xl  pt-3">
                    Your Watchlist
                  </h1>
                  <div className="pl-5 text-sm flex text-gray-400 font-coverFont font-bold pb-5">
                    <div className="max-w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{ width: "13px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" border-t border-slate-300"></div>
                  <div className="text-gray-600 flex py-4 text-sm justify-between pl-5 pr-4">
                    <div>
                      <span className="">
                        {originalData.length}
                        {originalData.length === 1 ? " Hotel" : " Hotels"}
                      </span>
                    </div>

                    <div>
                      <span>Sort by </span>
                      <select
                        className="rounded border px-2 w-48 py-1 outline-none border-gray-300  "
                        name=" "
                        id="sortdown"
                        onChange={(e) => {
                          setSortType(e.target.value);
                          sortArray(e.target.value);
                        }}
                      >
                        <option value="ratings">Rating</option>
                        <option value="name">Name</option>
                      </select>
                    </div>
                  </div>
                  <div className="border-t border-slate-300"></div>
                  <div className=" bg-white py-1">
                    {data &&
                      data.map((hotel, index) => (
                        <div key={hotel.id}>
                          <FavCard
                            hotel={hotel}
                            key={index}
                            setFlag={setFlag}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className=" text-black col-span-2 px-3  bg-gray-100">
                  <div className=" pt-3 font-semibold font-sans text-lg ">
                    Create a new list
                  </div>
                  <div className="pt-3  text-xs text-gray-600">
                    List your hotel, TV & celebrity picks.
                  </div>
                  <div className="pt-3 text-dark-forgot  text-xs">
                    Create a new list
                  </div>
                  <div className="mt-4 border-t border-slate-300"></div>
                  <div className=" text-dark-forgot pt-4 text-xs">
                    <span className=" text-black font-bold ">Feedback? </span>
                    Tell us what you think about this feature
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="">No favourite hotels in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
}
