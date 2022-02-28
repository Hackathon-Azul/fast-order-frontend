import type { NextPage } from "next";
import styled from "styled-components";
import Logo from "../components/Logo";
import FormSignIn from "../components/FormSignIn";
import media from "styled-media-query";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Logo size="large" />

        <h5 className="my-4 pb-4">Nome do Restaurante</h5>

        <FormSignIn />
        <div className="my-4 py-4">
          <Link href="/signup">
            <a className="text-white">Não tem cadastro?</a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 650px;
  ${media.lessThan("medium")`
      width:125%;
    `}
`;
