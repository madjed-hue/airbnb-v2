import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import InfoCard from "../components/InfoCard";

const Search = ({ data }) => {
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
          {data?.map((item) => (
            <InfoCard
              key={item.img}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              total={item.total}
              location={item.location}
              star={item.star}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const searResult = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const data = await searResult.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
