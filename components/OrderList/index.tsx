import Order from "dtos/Order";
import { Col, Row } from "react-bootstrap";
import { BsInfoCircleFill, BsTrashFill } from "react-icons/bs";
import styled from "styled-components";

type ImgProps = {
  resource: "Waiting" | "Avaliable" | "Finished" | "Cancelled";
};

type OrderItem = {
  data: Order;
};

const OrderListItem: React.FC<OrderItem> = ({ data }) => {
  return (
    <Row className="mt-2">
      <Col className="main-td" lg={8} md={6} xs={6}>
        #{data.id} | MESA {data.table_id}
      </Col>
      <Col className="btn-actions" lg={4} md={6} xs={6}>
        <Icon className="img-status" resource={data.status} />
        <BsInfoCircleFill
          style={{ cursor: "pointer" }}
          title="Informações do pedido"
          className="info-btn"
          color="#2A628F"
        />
        <BsTrashFill
          title="Cancelar pedido"
          style={{ cursor: "pointer" }}
          color="#2A628F"
        />
      </Col>
    </Row>
  );
};

export default OrderListItem;

const Icon = styled.img.attrs<ImgProps>((props) => ({
  src:
    props.resource === "Waiting"
      ? "/Pedido na fila.svg"
      : props.resource === "Avaliable"
      ? "/Pedido disponível.svg"
      : props.resource === "Cancelled"
      ? "/Pedido cancelado.svg"
      : "/Pedido finalizado.svg",

  alt: props.resource,
  title:
    props.resource === "Waiting"
      ? "Pedido na fila"
      : props.resource === "Avaliable"
      ? "Pedido disponível"
      : props.resource === "Cancelled"
      ? "Pedido cancelado"
      : "Pedido finalizado",
}))`
  cursor: pointer;
`;
