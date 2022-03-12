import { FormLoading } from "components/Form/styles";
import { useState } from "react";
import {
  Container,
  FormControl,
  Form,
  FormGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import UsersService from "services/users";
import { setLoggedUser } from "store/modules/auth/reducer";

const FormSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error("A senha e a confirmação de senha devem ser iguais!");
      return;
    }
    setLoading(true);

    try {
      await UsersService.signUp({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      toast.info(
        "Registro realizado com sucesso! Para continuar faça seu login."
      );
      setLoading(false);

      dispatch(
        setLoggedUser({
          id: 0,
          name,
          email,
          profile: "Attendant",
        })
      );

      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
    } catch (err) {
      setLoading(false);

      if (err.response.data.errors) {
        toast.warning(err.response.data.errors.full_messages[0]);
      }
      console.log(err.response);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
            <FormGroup className="mb-3">
              <FormControl
                type="text"
                className="py-3"
                placeholder="Digite seu nome aqui"
                value={name}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setName(evt.target.value)
                }
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormControl
                type="email"
                className="py-3"
                placeholder="seu@email.com"
                value={email}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(evt.target.value)
                }
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormControl
                type="text"
                className="py-3"
                placeholder="Digite sua senha aqui"
                value={password}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(evt.target.value)
                }
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormControl
                type="text"
                className="py-3"
                placeholder="Repita aqui sua senha"
                value={passwordConfirmation}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordConfirmation(evt.target.value)
                }
                required
              />
            </FormGroup>
            <div className="d-grid gap-2">
              <Button
                variant="custom-orange"
                className="text-white"
                size="lg"
                type="submit"
              >
                {loading ? <FormLoading /> : "CADASTRAR"}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormSignUp;
