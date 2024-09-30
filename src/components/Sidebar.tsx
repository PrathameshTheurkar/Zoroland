"use client";
import {
  OpenSideBarContext,
  OpenSideBarContextType,
} from "@/context/OpenSideBarContext";
import {
  Home,
  TrendingUp,
  Tv,
  Clapperboard,
  SlidersHorizontal,
  ScanLine,
  MessageCircleHeart,
  BookMarked,
  History,
} from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const Sidebar = () => {
  const { isOpen } = useContext(OpenSideBarContext) as OpenSideBarContextType;
  const NavItems = [
    {
      name: "Home",
      route: "/",
      icons: Home,
    },
    {
      name: "Trending",
      route: "/trending",
      icons: TrendingUp,
    },
    {
      name: "Popular",
      route: "/popular",
      icons: Tv,
    },
    {
      name: "Movies",
      route: "/movie",
      icons: Clapperboard,
    },
    {
      name: "Genres",
      route: "/genres",
      icons: SlidersHorizontal,
    },
    {
      name: "AniScan",
      route: "/aniscan",
      icons: ScanLine,
    },
    {
      name: "Waifu",
      route: "/waifu",
      icons: MessageCircleHeart,
    },
    {
      name: "Bookmark",
      route: "/bookmark",
      icons: BookMarked,
    },
    {
      name: "History",
      route: "/history",
      icons: History,
    },
  ];

  return (
    <>
      <div
        className={`z-50 w-52 md:hidden fixed bg-transparent backdrop-blur-md h-screen border-r-2 border-white/10 transition-all ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {NavItems.map((item, index) => {
          const Icon = item.icons;
          return (
            <Link
              href={item.route}
              key={index}
              className="flex items-center gap-2 p-2 pl-5 py-5 duration-200  transition-all hover:scale-90"
            >
              <Icon size={20} />
              <h1>{item.name}</h1>
            </Link>
          );
        })}
      </div>

      <div className="hidden md:block fixed h-screen w-52 border-r-2 border-white/10">
        {NavItems.map((item, index) => {
          const Icon = item.icons;
          return (
            <Link
              href={item.route}
              key={index}
              className="flex items-center gap-2 p-2 pl-5 py-5 duration-200  transition-all hover:scale-90"
            >
              <Icon size={20} />
              <h1>{item.name}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
