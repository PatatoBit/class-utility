import { Button, Container, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Layout from "../components/layout/content";
import styles from "../styles/Seat.module.scss";

import names from "../public/names.json";
import { useState } from "react";
import Link from "next/link";

const SeatBox = styled.div<{ leader?: boolean }>`
  color: white;
  background-color: ${(props) => (props.leader ? "#FFD533" : "#59afff")};
  border-radius: 0.4rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

function Seat() {
  const tierS = names.filter((name) => name.height == "S");
  const tierM = names.filter((name) => name.height == "M");
  const tierB = names.filter((name) => name.height == "B");

  const [leader, setLeader] = useState("");

  const [first, setFirst] = useState(tierS);
  const [second, setSecond] = useState(tierM);
  const [third, setThird] = useState(tierB);

  const randomize = () => {
    setLeader(names[Math.floor(Math.random() * names.length)].name);

    setFirst([...first].sort(() => Math.random() - 0.5));
    setSecond([...second].sort(() => Math.random() - 0.5));
    setThird([...third].sort(() => Math.random() - 0.5));
  };
  return (
    <>
      <Layout title="Seat Generator">
        <Container p={2}>
          {/* Seats layout */}
          <div className={styles.grid}>
            <>
              <div></div>
              {/* First Row */}
              {first.map((student, index) => {
                const isLeader = leader == student.name;

                return (
                  <SeatBox leader={isLeader} key={student.name}>
                    <div>{student.name}</div>
                  </SeatBox>
                );
              })}

              {second.map((student, index) => {
                const isLeader = leader == student.name;
                const indent = index == 5;

                return (
                  <>
                    {indent ? (
                      <>
                        <div></div>
                        <SeatBox leader={isLeader} key={student.name}>
                          <div>{student.name}</div>
                        </SeatBox>
                      </>
                    ) : (
                      <SeatBox leader={isLeader} key={student.name}>
                        <div>{student.name}</div>
                      </SeatBox>
                    )}
                  </>
                );
              })}

              <div></div>

              {third.map((student, index) => {
                const isLeader = leader == student.name;

                return (
                  <SeatBox leader={isLeader} key={student.name}>
                    <div>{student.name}</div>
                  </SeatBox>
                );
              })}
            </>
          </div>
          <Container centerContent m={2}>
            <Button colorScheme="green" p={2} onClick={randomize}>
              Randomize
            </Button>
          </Container>
          <ul>
            <Container centerContent>
              <Heading>Note</Heading>
            </Container>
            <li>
              Yellow box is the <code>leader</code>
            </li>
            <li>
              Height optimized, check{" "}
              <Link href="/names.json">
                <code>/names.json</code>
              </Link>{" "}
              for the data
            </li>
            <li>
              First row marked as <code>S</code>
            </li>
            <li>
              Second & Third row marked as <code>M</code>
            </li>
            <li>
              Fourth row marked as <code>B</code>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export default Seat;
