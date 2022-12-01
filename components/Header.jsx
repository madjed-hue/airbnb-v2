import Image from "next/image";
import React, { useState } from "react";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { DateRangePicker } from "react-date-range";
import { FaUserFriends } from "react-icons/fa";
import { useRouter } from "next/router";
import { format } from "date-fns";

const Header = ({ placeHolder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: format(startDate, "dd MMMM yyyy"),
        endDate: format(endDate, "dd MMMM yyyy"),
        noOfGuests: numberOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeHolder ? placeHolder : "start your search"}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRanges]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleChange}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <FaUserFriends />
            <input
              type="number"
              min={1}
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
