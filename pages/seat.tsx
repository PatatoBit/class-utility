import { Button, Container, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Layout from "../components/layout/content";
import styles from "../styles/Seat.module.scss";

import names from "../public/names.json";
import { useState } from "react";
import Link from "next/link";

const SeatBox = styled.div<{ leader?: boolean }>`
  color: white;
  background-color: ${(props) => (props.leader ? "#ffb515" : "#59afff")};
  border-radius: 0.4rem;

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

function Seat() {
  const tierX = names.filter((name) => name.height == "X");
  const tierY = names.filter((name) => name.height == "Y");

  const [leader, setLeader] = useState("");

  const [x, setX] = useState(tierX);
  const [y, setY] = useState(tierY);

  const randomize = () => {
    setLeader(names[Math.floor(Math.random() * names.length)].name);

    setX([...x].sort(() => Math.random() - 0.5));
    setY([...y].sort(() => Math.random() - 0.5));
  };
  return (
    <>
      <Layout title="Seat Generator">
        <Container p={2}>
          {/* Seats layout */}
          <div className={styles.grid}>
            <>
              <div></div>

              {/* 1-3 Row */}
              {x.map((student, index) => {
                const isLeader = leader == student.name;

                const indent = index == 9;

                return (
                  <>
                    {indent ? (
                      <>
                        <div></div>
                        <SeatBox leader={isLeader} key={student.name}>
                          <Text>{student.name}</Text>
                        </SeatBox>
                      </>
                    ) : (
                      <SeatBox leader={isLeader} key={student.name}>
                        <Text>{student.name}</Text>
                      </SeatBox>
                    )}
                  </>
                );
              })}

              {/* Back row */}
              <div></div>
              {y.map((student, index) => {
                const isLeader = leader == student.name;

                return (
                  <SeatBox leader={isLeader} key={student.name}>
                    <Text>{student.name}</Text>
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
            <Container centerContent mt={10}>
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
