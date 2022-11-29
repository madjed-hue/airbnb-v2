import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb V2</title>
      </Head>
      <Header />
      <Banner />
      <main>
        <section>
          <h2>Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
}
