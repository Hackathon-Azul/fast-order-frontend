import {
  Container,
  FormControl,
  Form,
  FormGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const FormSignUp = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
            <FormGroup className="mb-3">
            <FormControl
                type="text"
                className="py-3"
                placeholder="Digite seu nome aqui"
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormControl
                type="email"
                className="py-3"
                placeholder="seu@email.com"
              />
              </FormGroup>
            <FormGroup className="mb-3">
              <FormControl
                type="text"
                className="py-3"
                placeholder="Digite sua senha aqui"
              />
              </FormGroup>
               <FormGroup className="mb-3">
                <FormControl
                type="text"
                className="py-3"
                placeholder="Repita aqui sua senha"

              />
            </FormGroup>
            <div className="d-grid gap-2">
              <Button
                variant="custom-orange"
                className="text-white"
                size="lg"
                type="submit"
              >
                CADASTRAR
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormSignUp;
