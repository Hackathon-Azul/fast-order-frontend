import Header from "components/Header";
import LoggedInUser from "components/LoggedInUser";
import Logo from "components/Logo";
import AuthState from "dtos/AuthState";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as S from "./styles";
import Image from "next/image";
import ApiData from "dtos/ApiData";
import withAuthAdmin from "components/withAuthAdmin";
import { GetServerSidePropsContext } from "next";

const Admin: React.FC = () => {

  const { name } = useSelector((state: AuthState) => state.auth.loggedUser);

  return (
    <S.Wrapper>
      <Header isSpaced>
        <Logo size="small" />
        <LoggedInUser>Olá, {name + "!"}</LoggedInUser>
      </Header>
      <Row lg={12} className="col-admin-regis">
        <Image
          width={250}
          alt="caixa registradora"
          height="80%"
          src={"/registradora.svg"}
        />
      </Row>
      <p className="text-center"> Caixa registradora</p>
      <Row className="row-images1">
        <Col lg={6} className="admin-images" xs={6}>
          <Image
            width={250}
            alt="configurações"
            height={180}
            src={"/config.svg"}
          />
        </Col>
        <Col lg={6} xs={6} className="admin-images">
          <Image
            width={250}
            alt="cadastro de usuários"
            height={180}
            src={"/users.svg"}
          />
        </Col>
      </Row>
      <Row className="row-text">
        <Col className="admin-text" lg={6} xs={6}>
          Configurações
        </Col>
        <Col className="admin-text" lg={6} xs={6}>
          Cadastro Usuários
        </Col>
      </Row>
      <Row className="row-images1">
        <Col lg={6} className="admin-images">
          <Image
            width={250}
            alt="cadastro de produtos"
            height={180}
            src={"/product.svg"}
          />
        </Col>
        <Col lg={6} className="admin-images">
          <Image
            width={250}
            alt="relatórios"
            height={180}
            src={"/report.svg"}
          />
        </Col>
      </Row>
      <Row className="row-text">
        <Col className="admin-text" lg={6} xs={6}>
          Cadastro Produtos
        </Col>
        <Col className="admin-text" lg={6} xs={6}>
          Relatórios
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default withAuthAdmin(Admin);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const authToken: ApiData = ctx.req.cookies["%40api-data"] && JSON.parse(ctx.req.cookies["%40api-data"]);
  const isExpired = authToken && authToken.expiry < (new Date() as any)/1000

  if (!authToken || isExpired) {
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