import { Button, Container, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Layout from "../components/layout/content";
import styles from "../styles/Seat.module.scss";

import names from "../public/names.json";
import { useState } from "react";

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

  const [first, setFirst] = useState(tierS);
  const [second, setSecond] = useState(tierM);
  const [third, setThird] = useState(tierB);

  const randomize = () => {};
  return (
    <>
      <Layout title="Seat Generator">
        <Container p={2}>
          {/* Seats layout */}
          <div className={styles.grid}>
            <>
              <div></div>
              {/* First Row */}
              {first.map((student) => {
                return (
                  <SeatBox key={student.name}>
                    <div>{student.name}</div>
                  </SeatBox>
                );
              })}

              {second.map((student, index) => {
                const leader = index == 0;
                const indent = index == 5;

                return (
                  <>
                    {indent ? (
                      <>
                        <div></div>
                        <SeatBox leader={leader} key={student.name}>
                          <div>{student.name}</div>
                        </SeatBox>
                      </>
                    ) : (
                      <SeatBox leader={leader} key={student.name}>
                        <div>{student.name}</div>
                      </SeatBox>
                    )}
                  </>
                );
              })}

              <div></div>

              {third.map((student) => {
                return (
                  <SeatBox key={student.name}>
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
        </Container>
      </Layout>
    </>
  );
}

export default Seat;
