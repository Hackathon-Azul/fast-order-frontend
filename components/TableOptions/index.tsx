import { Modal, ModalOverlay } from "./styles";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const TableOptions = ({ children, number, disabled }) => {
  const router = useRouter();
  return (
    <>
      <ModalOverlay>
        <Modal>
          <h5>{children}</h5>
          <p>Selecione uma opção</p>
          <Button variant="custom-orange" className="text-white my-3" size="lg">
            {disabled ? "Abrir" : "Fechar"} Mesa
          </Button>
          <Button variant="custom-orange" className="text-white my-3" size="lg">
            Adicionar Pedido
          </Button>
          <Button
            disabled={disabled}
            variant="custom-orange"
            className="text-white my-3"
            size="lg"
            onClick={() => router.push(`tableOrder/${number.split(" ")[1]}`)}
          >
            Consultar Pedidos da mesa
          </Button>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default TableOptions;
