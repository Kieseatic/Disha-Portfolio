"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 font-bold">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-[#F4D03F] border-b-2 border-[#F4D03F]"
            } font-bold hover:text-accent transition-all capitalize`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
