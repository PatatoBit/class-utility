import { Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Layout from "../components/layout/content";

import styles from "../styles/Seat.module.scss";

const Seat = styled.div`
  color: white;
  background-color: #59afff;
  border-radius: 0.4rem;
`;

function seat() {
  return (
    <>
      <Layout title="Seat Generator">
        <Container p={2}>
          {/* Seats layout */}
          <div className={styles.grid}>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default seat;
