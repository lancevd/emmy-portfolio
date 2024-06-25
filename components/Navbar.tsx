import Link from "next/link";
import React from "react";

const menu = ([] = [
  {
    name: "home",
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
    <nav className="border bg-[#E0E0E080] p-3 flex gap-3">
      {menu.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
