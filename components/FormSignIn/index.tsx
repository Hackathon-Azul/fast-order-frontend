import {
  Container,
  FormControl,
  Form,
  FormGroup,
  Button,
  Col,
  Row
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UsersService from "services/users";
import { setLoggedUser } from "store/modules/auth/reducer";
import AuthState from "dtos/AuthState";
import User from "dtos/User";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { FormLoading } from "components/Form/styles";


const FormSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const loggedUser: User = useSelector(
    (state: AuthState) => state.auth.loggedUser
  );

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    setLoading(true)

    try {
      const response = await UsersService.signIn({ email, password });

      const { id, email: userEmail, name, profile } = response.data.data;

      const user = {
        id,
        name,
        email: userEmail,
        profile: profile,
      };

      dispatch(setLoggedUser(user));
      setLoading(false)

      toast.info("Login realizado com sucesso!");

      if (router.query.callback) {
        router.push(decodeURIComponent(router.query.callback.toString()));
      } else {
        router.push(user.profile === "Admin" ? "/Admin" : "/tables");
      }
    } catch (err) {
      toast.error("E-mail ou senha inválidos!");
      setLoading(false)

    }
  };

  useEffect(() => {
    if (loggedUser) {
      setEmail(loggedUser.email);
      if (passwordRef && passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [loggedUser]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
        <FormGroup className="mb-3">
          <FormControl
            className="py-3"
            placeholder="seu@email.com"
            value={email}
            type="email"
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(evt.target.value)
            }
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            value={password}
            type="password"
            ref={passwordRef}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(evt.target.value)
            }
            required
            className="py-3"
            placeholder="senha"
          />
        </FormGroup>
        <div className="d-grid gap-2">
          <Button
            variant="custom-orange"
            className="text-white"
            size="lg"
            type="submit"
            
          >
         {loading ? <FormLoading /> : "LOGIN"}
          </Button>
        </div>
        </Col>
      </Row>
      </Form>
    </Container>
  );
};

export default FormSignIn;

