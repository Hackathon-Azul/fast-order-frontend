import { Modal, ModalOverlay } from "./styles";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Order from "dtos/Order";

type Props = {
  children: React.ReactNode;
  number: string;
  disabled: boolean;
  orders: [Order];
};

const TableOptions: React.FC<Props> = ({
  children,
  number,
  disabled,
  orders,
}) => {
  const router = useRouter();
  const num = Number(number.split(" ")[1]);
  const order = orders.find(
    (order) => order.table_id === num && order.status === "Waiting"
  );

  return (
    <>
      <ModalOverlay>
        <Modal>
          <h5>{children}</h5>
          <p>Selecione uma opção</p>
          <Button
            variant="custom-orange"
            className="text-white my-3"
            size="lg"
            onClick={() => {}}
          >
            {!disabled ? "Abrir" : "Fechar"} Mesa
          </Button>
          <Button
            variant="custom-orange"
            className="text-white my-3"
            size="lg"
            disabled={!disabled}
            onClick={() =>
              disabled ? router.push(`/tableOrder/${num}`) : null
            }
          >
            Adicionar Pedido
          </Button>
          <Button
            disabled={disabled}
            variant="custom-orange"
            className="text-white my-3"
            size="lg"
            onClick={() => {
              router.push(`/update?table=${num}&order=${order.id}`);
            }}
          >
            Consultar Pedidos da mesa
          </Button>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default TableOptions;
