import Link from "next/link";
import React from "react";

const menu = ([] = [
  {
    name: "Home",
    link: "/",
    target: "",
  },
  {
    name: "Works",
    link: "/works",
    target: "",
  },
  {
    name: "Portfolio",
    link: "https://dribbble.com/Otitoola",
    target: "_blank",
  },
  {
    name: "Contact",
    link: "#",
    target: "",
  },
]);

const Navbar = () => {
  return (
    <nav className="contain my-8 md:my-12 border w-full md:w-2/3 lg:w-1/3 mx-auto rounded-[2rem] justify-evenly text-white items-center bg-[#282828] border-[#E0E0E080] p-3 flex gap-3">
      {menu.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            target={item.target}
            className="py-1 text-sm md:text-base"
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
