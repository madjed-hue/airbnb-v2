import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const rangeDate = `${startDate} - ${endDate}`;
  return (
    <div>
      <Header
        placeHolder={`${location} | ${rangeDate} | ${noOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays from {startDate} to {endDate} for {noOfGuests} of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex text-gray-800 space-x-3 mb-5 whitespace-nowrap">
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of place </p>
            <p className="button">Price </p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
