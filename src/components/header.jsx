import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import logo from "../assets/photo_2025-09-29_15-11-35-removebg-preview.png";

const menuItems = [
  { name: "Home", to: "/" },
  { name: "FAQ", to: "FAQ" },
  { name: "Highlights", to: "research" },
  { name: "Contact", to: "about" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : ""}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={`mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 ${
            isScrolled
              ? "bg-black/70 border border-blue-900 backdrop-blur-lg rounded-2xl"
              : ""
          }`}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo and mobile menu button */}
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 text-white font-bold text-lg"
              >
                HORIZONX
              </a>
              <img src={logo} className="w-8 h-8"></img>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
              >
                <Menu className="m-auto size-6 duration-200" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
             <ul className="flex gap-8 text-sm">
  {menuItems.map((item) =>
    item.to === "/" ? (
      <Link to={item.to} key={item.name} className="text-white hover:text-blue-400 transition">
        {item.name}
      </Link>
    ) : (
      <ScrollLink
        to={item.to}
        smooth={true}
        duration={500}
        key={item.name}
        className="cursor-pointer text-white hover:text-blue-400 transition"
      >
        {item.name}
      </ScrollLink>
    )
  )}
</ul>

            </div>

            {/* Mobile menu + single button */}
            <div className="bg-black/80 text-white mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-blue-900 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-200 hover:text-blue-400 block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <a
                  href="#"
                  className={`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all ${
                    isScrolled ? "lg:inline-flex" : "hidden"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
