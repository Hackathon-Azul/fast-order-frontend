import { Modal, ModalOverlay } from "./styles";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { useRouter } from "next/router";
import Order from "dtos/Order";
import { Dispatch, SetStateAction } from "react";
import { FormLoading } from "components/Form/styles";

type Props = {
  children: React.ReactNode;
  number?: string;
  disabled?: boolean;
  orders?: Order[];
  isCheckout?: boolean;
  header?: string;
  createOrder?: () => void;
  name?: string;
  setName?: Dispatch<SetStateAction<string>>;
  loading?: boolean
};

const TableOptions: React.FC<Props> = ({
  children,
  number,
  disabled,
  orders,
  isCheckout = false,
  header = "Selecione uma opção",
  createOrder,
  name,
  setName,
  loading = false
}) => {
  const router = useRouter();

  const num = Number(number?.split(" ")[1]);
  const order = orders?.find(
    (order) => order.table_id === num && order.status === "Waiting"
  );

  return (
    <>
      <ModalOverlay isCheckout={isCheckout}>
        <Modal>
          <h5>{children}</h5>
          <p>{header}</p>
          {!isCheckout && (
            <Button
              variant="custom-orange"
              className="text-white my-3"
              size="lg"
              onClick={() => {}}
            >
              {!disabled ? "Abrir" : "Fechar"} Mesa
            </Button>
          )}
          {!isCheckout && (
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
          )}

          {!isCheckout && (
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
          )}

          {isCheckout && (
            <FormGroup className="mb-3">
              <FormControl
                type="text"
                className="py-3"
                placeholder="Digite o nome do cliente aqui"
                value={name}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setName(evt.target.value)
                }
                required
              />
            </FormGroup>
          )}

          {isCheckout && (
            <Button
              variant="custom-orange"
              className="text-white my-3"
              size="lg"
              disabled={!name && name.length < 5}
              onClick={createOrder}
            >
           {loading ? <FormLoading /> : "Finalizar pedido"}   
            </Button>
          )}
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default TableOptions;
