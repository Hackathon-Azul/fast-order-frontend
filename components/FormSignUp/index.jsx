import { Container, FormControl, Form, FormGroup, Button } from "react-bootstrap"

const FormSignUp = () => {
  return (
    <Container>
    <Form>
        <FormGroup className="mb-3">
          <FormControl type="text" className="py-3" placeholder="seu@email.com" />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl type="text" className="py-3" placeholder="Digite sua senha aqui" />
        </FormGroup>
        <div className="d-grid gap-2">
        <Button variant="custom-orange" className="text-white" size="lg" type="submit">
          CADASTRAR
        </Button>
        </div>
    </Form>
    </Container>
  )
}

export default FormSignUp