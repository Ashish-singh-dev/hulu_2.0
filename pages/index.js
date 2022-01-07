import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Poster from "../components/Poster";
import requests from "../utils/requests";

export default function Home({ data }) {
  return (
    <main className="text-white">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Navbar />
      <Poster data={data} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query["genre"];
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.trending.url
      }`
    ).then((res) => res.json());
    if (!data) {
      return {
        props: {
          data: {
            success: false,
            message: data.status_message || "No data found",
          },
        },
      };
    }
    return {
      props: {
        data: {
          success: true,
          results: data.results,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        data: {
          success: false,
          message: error.status_message || "Error occured while fetching data",
        },
      },
    };
  }
}
