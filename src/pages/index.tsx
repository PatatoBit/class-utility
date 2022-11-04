import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";

const Seat = styled.div`
  display: flex;
  width: full;
  height: full;
  background-color: #59afff;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin: 0.5rem;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

const students = [
  "Amm",
  "Atom",
  "Baikhao",
  "Bouquet",
  "Fha",
  "Moey",
  "Mulan",
  "Muna",
  "Oahm",
  "Pai",
  "Pat",
  "Peach",
  "PK",
  "Prewa",
  "Pub",
  "Rak",
  "Yayo",
];

const Home: NextPage = () => {
  const [random, setRandom] = useState(students);

  function randomize() {
    const shuffle = [...students].sort(() => Math.random() - 0.5);

    setRandom(shuffle);

    // console.log(students, random);
  }

  return (
    <>
      <Head>
        <title>Class Website</title>
        <meta name="description" content="omg fr fr ong??" />
        <link rel="icon" href="/logo.svg" />
        <meta
          property="og:image"
          content="https://patato.live/vaderfight.png"
        />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold">Random Seat Generator</h1>

        {/* Seatings */}
        <div className="seatbox">
          {random.map((rand) => (
            <Seat key={rand}>{rand}</Seat>
          ))}
        </div>
        <button
          className="mt-4 rounded-lg bg-green-500 px-4 py-3 text-2xl text-white"
          onClick={randomize}
        >
          Shuffle 🔀
        </button>
      </main>
    </>
  );
};

export default Home;
