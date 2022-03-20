import Header from "components/Header";
import Loader from "components/Loader";
import OrderListItem from "components/OrderList";
import { TableContainerTag } from "components/TableContainer/styles";
import withAuth from "components/withAuth";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { BsChevronLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import OrderService from "services/order";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import useSWR from "swr";

const OrderList: React.FC = () => {
  const { data, error } = useSWR("/storefront/v1/orders", OrderService.index);

  if (error) {
    toast.error("Erro ao obter dados da lista de pedidos!");
    console.log(error);
  }

  return (
    <Wrapper>
      <Header>
        <Link href="/tables">
          <a style={{ color: "white", textDecoration: "none" }}>
            <BsChevronLeft size="36" />
          </a>
        </Link>
        <span>Pedido Rápido - Lista geral de pedidos</span>
      </Header>
      <Container>
        <p> Últimos pedidos </p>
        {!data ? (
          <Loader />
        ) : (
          <TableContainerTag isWhite>
            <Container>
              {data.map((order) => (
                <OrderListItem key={order.id} data={order} />
              ))}
            </Container>
          </TableContainerTag>
        )}
      </Container>
    </Wrapper>
  );
};

export default withAuth(OrderList);

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

const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 120vh;

    p {
      text-align: center;
      margin-top: 2vw;
      font-size: 15px;
    }

    tr {
      justify-content: space-evenly;
    }

    .btn-actions {
      text-align: center;
    }

    .main-td {
      color: ${theme.colors.text};
    }

    .info-btn {
      margin: auto 0.8rem;
    }

    .btn-actions {
      justify-content: space-between;
    }

    ${media.greaterThan("medium")`
      svg, img {
          font-size: 2rem;
          width: 2rem;
          height: 2rem;
      }
      .main-td {
        font-size: 1.5rem;
      }

      p {
        font-size: 2.5rem;
      }

      span {
        font-size: 1.5rem;
        margin: 1rem 0;

      }
    `}
  `}
`;
