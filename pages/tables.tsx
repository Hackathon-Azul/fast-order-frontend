import Header from "../components/Header";
import TableContainer from "../components/TableContainer";
import LoggedInUser from "../components/LoggedInUser";
import TablesService from "services/tables";
import User from "dtos/User";
import { useSelector } from "react-redux";
import Logo from "components/Logo";
import styled from "styled-components";
import media from "styled-media-query";
import useSWR from "swr";

import withAuth from "components/withAuth";
import { toast } from "react-toastify";
import AuthState from "dtos/AuthState";

const Tables: React.FC = () => {
  const { name }: User = useSelector(
    (state: AuthState) => state.auth.loggedUser
  );
  const { data, error } = useSWR("/storefront/v1/tables", TablesService.index);

  if (error) {
    toast.error("Erro ao obter dados das mesas!");
    console.log(error);
  }

  return (
    <>
      <Header isSpaced>
        <Logo size="small" />
        <LoggedInUser>Olá, {name + "!"}</LoggedInUser>
      </Header>
      <Title>Escolha uma mesa para gerenciar pedidos</Title>
      <TableContainer data={data} />
    </>
  );
};

export default withAuth(Tables);

export async function getServerSideProps(ctx) {
  const authToken = ctx.req.cookies["%40api-data"];

  if (!authToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
  line-height: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;

  ${media.lessThan("medium")`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px;
    margin-bottom: 6px;

  `}
`;
