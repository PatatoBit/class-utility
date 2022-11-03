import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";

const Seat = styled.div`
  display: flex;
  width: full;
  height: full;
  background-color: #c4b5fd;
  color: white;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  margin: 0.5rem;
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
    const shuffle = students.sort(() => 0.5 - Math.random());
    setRandom(shuffle);

    console.log(students, random);
  }

  return (
    <>
      <Head>
        <title>🍤</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold">This week&apos;s seat</h1>

        <button onClick={randomize}>Shuffle</button>

        {/* Seatings */}
        <div className="seatbox">
          {random.map((student) => (
            <Seat key={student}>{student}</Seat>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
