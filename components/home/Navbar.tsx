import Link from "next/link";
import React from "react";

const menu = ([] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]);

const Navbar = () => {
  return (
    <nav className="contain border w-full md:w-2/3 lg:w-1/3 mx-auto rounded-[2rem] justify-evenly text-white items-center bg-[#282828] border-[#E0E0E080] p-3 flex gap-3">
      {menu.map((item, index) => {
        return (
          <Link href={item.link} key={index} className="py-1 text-sm md:text-base">
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
