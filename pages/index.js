import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Home({ results, cardResults }) {
  return (
    <div>
      <Head>
        <title>Airbnb V2</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results?.map((result) => (
              <SmallCard
                img={result.img}
                distance={result.distance}
                location={result.location}
                key={result.img}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardResults?.map((item) => (
              <MediumCard img={item.img} title={item.title} key={item.img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Grreatest Outdoors"
          description="whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const results = await exploreData.json();
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardResults = await cardsData.json();
  return {
    props: {
      results,
      cardResults,
    },
  };
}
