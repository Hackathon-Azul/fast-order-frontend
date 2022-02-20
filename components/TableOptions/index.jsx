import { Modal, ModalOverlay } from "./styles"
import { Button } from "react-bootstrap"

const TableOptions = ({children}) => {
  return (
    <>
    <ModalOverlay>
      <Modal>
        <h5>{children}</h5>
        <p>Selecione uma opção</p>
        <Button variant="custom-orange" className="text-white my-3" size="lg">
            Abrir / Fechar Mesa
        </Button>
        <Button variant="custom-orange" className="text-white my-3" size="lg">
          Adicionar Pedido
        </Button>
        <Button variant="custom-orange" className="text-white my-3" size="lg">
          Consultar Pedidos da mesa
        </Button>
      </Modal>
    </ModalOverlay>
    </>
  )
}

export default TableOptions