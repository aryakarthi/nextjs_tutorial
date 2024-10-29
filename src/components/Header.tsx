"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="container">
        <div className="h-20 flex justify-between items-center">
          <Link href={"/"} className="text-red-500 text-3xl font-bold">
            next.js
          </Link>
          <nav className="md:block hidden">
            <ul className="flex gap-5">
              <li>
                <Link
                  href={"/about"}
                  className={isActive("/about") ? "text-red-500" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/products"}
                  className={isActive("/products") ? "text-red-500" : ""}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className={isActive("/contact") ? "text-red-500" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
