"use client";
import React, { useState } from "react";
import {Link} from "react-scroll/modules";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface NavItems {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItems> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];
const Header = () => {
 
  //detenting if the navbar is open or not mobile or desktop
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="w-full px-4 mx-auto shadow z-20 fixed top-0 bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:flex  md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">Fernando Hernandez</h2>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavBar(!navBar)}>
                {navBar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navBar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:space-y-0  md:flex md:space-x-4">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={100}
                    className="block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                    onClick={() => setNavBar(!navBar)}
                 >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
