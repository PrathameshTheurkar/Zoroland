"use client";
import { useContext } from "react";
import { Search, Menu } from "lucide-react";
import {
  OpenSideBarContext,
  OpenSideBarContextType,
} from "@/context/OpenSideBarContext";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(
    OpenSideBarContext
  ) as OpenSideBarContextType;

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen);
    console.log("isOpen clicked");
  };

  return (
    <div className="sticky top-0 w-full px-10 py-5 flex justify-between bg-transparent backdrop-blur-md border-b-2 border-white/10">
      <div className="flex gap-3">
        <span className="md:hidden flex justify-center items-center w-full cursor-pointer">
          <Menu size={25} onClick={handleOpenSidebar} />
        </span>
        <Link href='/'>
        <p className="flex items-center text-2xl font-bold">
          <span className="duration-200  transition-all hover:scale-125">Z</span>
          <span className="duration-200  transition-all hover:scale-125">o</span>
          <span className="duration-200  transition-all hover:scale-125">r</span>
          <span className="duration-200  transition-all hover:scale-125">o</span>
          <span className="duration-200  transition-all hover:scale-125">l</span>
          <span className="duration-200  transition-all hover:scale-125">a</span>
          <span className="duration-200  transition-all hover:scale-125">n</span>
          <span className="duration-200  transition-all hover:scale-125">d</span>
        </p>
        </Link>
      </div>
      <div className="hidden md:flex w-auto gap-4 ">
        <div className="relative rounded-md shadow-sm ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <Search size={15} />{" "}
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            placeholder="Search Anime.."
          />
        </div>
        <button className="bg-white px-4 text-black rounded-md duration-150 hover:bg-transparent hover:border border-white hover:text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
