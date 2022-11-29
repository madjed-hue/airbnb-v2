import Image from "next/image";
import React from "react";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          width={100}
          height={100}
          alt="airbnb-logo"
          className="object-contain object-left"
        />
      </div>
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:text-gray-400"
        />
        <BiSearch className="h-8 bg-red-400 text-white rounded-full w-8 p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <BsGlobe className="h-6 w-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <AiOutlineMenu className="h-6 w-6 cursor-pointer" />
          <BiUserCircle className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
