import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ResultCard } from "./ResultCard";
import Link from "next/link";
import { hotelData } from "@/constants";
import FavCard from "./FavCard";
import Image from "next/image";

const navigation = [
  { name: "Hotels", href: "/allData" },
  { name: "Features", href: "#" },
  { name: "Favourite", href: "/favourite" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeout = useRef();
  const [results, setResults] = useState([]);
  const [flag, setFlag] = useState(false);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
    //Clear the previous timeout.
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const data = hotelData.filter((object) => {
        const nameMatch = object.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
        const descriptionMatch = object.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
        return nameMatch || descriptionMatch;
      });
      setResults(data);
    }, 400);
  };

  return (
    <header className="bg-white container">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6 lg:py-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/assets/mainlogo.png"
              alt=""
              height={"300"}
              width={"300"}
            />
          </Link>
        </div>

        {/* Search box */}
        <div className="flex-1 lg: mx-4 relative">
          <div className="">
            <input
              type="text"
              className="text-sm focus:border-yellow-400 focus:border-2 px-2 placeholder:text-slate-500 text-black flex-1 w-full rounded h-8 outline-none border bg-right sm:block lg:block md:block"
              placeholder="Search Hotels"
              onChange={onChange}
              onBlur={() => {
                setTimeout(() => {
                  setResults([]);
                  setSearch("");
                }, 1000);
              }}
              value={search}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white sm:text-slate-500 absolute right-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* Search Results */}
          <div className="z-10 m-auto absolute ">
            <div className="bg-zinc-200 max-h-[550px] overflow-y-scroll">
              {results.length > 0 && (
                <div className="">
                  {results.map((hotel) => (
                    <div key={hotel.id}>
                      <Link href={`/hotel/${hotel.id}`}>
                        <FavCard
                          hotel={hotel}
                          setFlag={setFlag}
                          unFav={false}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                height={"300"}
                width={"300"}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
