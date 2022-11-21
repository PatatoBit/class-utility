import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Layout from "../components/layout/content";

import styles from "../styles/Group.module.scss";

const Selector = styled.div`
  background-color: #59afff;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function Group() {
  return (
    <Layout title="Group Creator">
      <Container p={2}>
        <div className={styles.grid}>
          <div>
            <Selector>
              <Heading>Pat</Heading>
              <Button leftIcon={<CloseIcon />} colorScheme="red">
                Remove
              </Button>
            </Selector>
          </div>
          <div></div>
        </div>
      </Container>
    </Layout>
  );
}

export default Group;
