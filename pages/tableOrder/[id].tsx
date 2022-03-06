/* eslint-disable react-hooks/rules-of-hooks */
import {
  Container,
  FormControl,
  Form,
  FormGroup,
  FormLabel,
  Button,
  Col,
  Row,
  Table,
} from "react-bootstrap";
import { BsCheck, BsTrash, BsX } from "react-icons/bs";
import Header from "../../components/Header";
import { BsChevronLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import CategoriesService from "services/categories";
import Category from "dtos/Category";
import ProductsService, { IProductsIndexData } from "services/products";
import Product from "dtos/Product";
import Link from "next/link";
import * as S from "./styles";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartProduct,
  clearCartProducts,
  removeCartProduct,
} from "store/modules/storefront/cartProducts/reducer";
import OrderService from "services/order";
import User from "dtos/User";
import OrderItem from "dtos/OrderItem";
import Router from "next/router";
import AuthState from "dtos/AuthState";

type Props = {
  categories: Category[];
  products: IProductsIndexData;
  id: number;
};

const tableOrder: React.FC<Props> = ({ categories, products, id }) => {
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<[Product] | []>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [client, setClient] = useState("Alan");
  const [totalAmout, setTotalAmout] = useState(0);
  const [product, setProduct] = useState<Product>();
  const [comments, setComments] = useState<string | undefined>();

  const dispatch = useDispatch();

 useEffect(() => {
  dispatch(clearCartProducts());
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

  type State = {
    cartProducts: {
      quantity: number;
      description: string;
      name: string;
      price: number;
      productId: number;
      comments: string;
    }[];
  };

  const data = useSelector((state: State) => state.cartProducts);
  const user: User = useSelector((state: AuthState) => state.auth.loggedUser);

  function chooseProduct(e) {
    let product = products.products.find(
      (product) => product.name === e.target.value
    );
    const productDescription = product.description;
    const productPrice = Number(product.price.toFixed(2).replace(",", "."));
    setProductPrice(productPrice);
    setProductDescription(productDescription);
    setProduct(product);
  }

  function chooseQuantity(e) {
    setProductQuantity(Number(e.target.value));
  }

  function calcPrice() {
    const total = productList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmout(total);
    console.log(total);
  }

  function applyProduct() {
    if (!selectedCategory || !product?.name) {
      return toast.info("Selecione um produto primeiro");
    }

    const newProduct = {
      quantity: productQuantity,
      description: productDescription,
      name: product.name,
      price: productPrice,
      productId: product.id,
      comments,
    };

    const isWithin = data.some((product) => product.name === newProduct.name);
    if (!isWithin) {
      dispatch(addCartProduct(newProduct as any));
      productList.push(newProduct);
      setProductList(productList);
      calcPrice();
    } else {
      toast.info("Produto já adicionado na lista");
    }
  }

  useEffect(() => {
    const newProducts = products.products.filter(
      (product) => product.category.title === selectedCategory
    );
    setSelectedProduct(newProducts as [Product]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const removeProducts = (key: number) => {
    // const price = productList[key].price;
    // const qty = productList[key].quantity;
    // const value = price * qty;
    // const total_value = totalAmout - value;
    productList.splice(key, 1);
    dispatch(removeCartProduct(key));
    calcPrice();
  };

  const removeAll = () => {
    dispatch(clearCartProducts());
    setProductList([]);
    calcPrice();
  };

  const addOrder = () => {
    const order_items_attributes = [] as unknown as [OrderItem];

    data.map((item) => {
      const order_item: OrderItem = {
        quantity: item.quantity,
        product_id: item.productId,
        comments: item.comments,
      };
      order_items_attributes.push(order_item);
    });

    const order = {
      table_id: id,
      user_id: user.id,
      client_name: client,
      order_items_attributes,
    };
    try {
      OrderService.create(order);
      toast.success("Pedido enviado com sucesso!");
      dispatch(clearCartProducts());
      Router.push("/tables");
    } catch (error) {
      toast.error("Ops...Tente novamente mais tarde!");
    }
  };

  return (
    <S.Wrapper>
      <Header>
        <Link href="/tables">
          <a style={{ color: "white", textDecoration: "none" }}>
            <BsChevronLeft size="36" />
          </a>
        </Link>
        <span>Mesa {id}</span>
      </Header>
      <Container>
        <Form className="mt-4">
          <FormGroup className="mb-3">
            <FormControl
              as="select"
              className="py-3 bg-white primary-form-control"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Selecione a Categoria de Produtos</option>
              {categories.map((category) => (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </FormControl>
          </FormGroup>

          <FormGroup className="mb-3">
            <FormControl
              as="select"
              className="py-3 bg-white"
              onChange={chooseProduct}
            >
              <option>Produtos da Categoria</option>
              {selectedProduct.map((product: Product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </FormControl>
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl
              as="textarea"
              className="py-3"
              placeholder="Descrição"
              readOnly
              value={productDescription}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl
              as="textarea"
              className="py-3"
              placeholder="Observações"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </FormGroup>
          <Container>
            <Row className="align-items-center">
              <Col lg={4} sm={4} xs={4}>
                <FormGroup className="mb-3">
                  <FormLabel className="form-label-order" lg={12}>
                    Preço:
                  </FormLabel>
                  <FormControl
                    type="number"
                    className="py-3"
                    readOnly
                    value={Number(productPrice).toFixed(2)}
                  />
                </FormGroup>
              </Col>
              <Button
                as={Col}
                lg={2}
                xs={1}
                className="button-plus mt-3 py-3"
                size="lg"
                variant="light"
                style={{
                  backgroundColor: "white",
                  width: "56px",
                  height: "59px",
                }}
                onClick={() => setProductQuantity(productQuantity + 1)}
              >
                +
              </Button>
              <FormGroup lg={2} as={Col} xs={3}>
                <FormControl
                  type="number"
                  className="py-3 mt-3 b-qty"
                  style={{ alignItems: "flex-end" }}
                  min="1"
                  value={productQuantity}
                  onChange={chooseQuantity}
                />
              </FormGroup>
              <Col lg={2} sm={2} xs={1}>
                <Button
                  className="button-minus mt-3"
                  variant="light"
                  style={{
                    backgroundColor: "white",
                    width: "56px",
                    height: "59px",
                  }}
                  onClick={() =>
                    productQuantity > 1 &&
                    setProductQuantity(productQuantity - 1)
                  }
                >
                  -
                </Button>
              </Col>

              <Button
                as={Col}
                variant="custom-orange"
                className="text-white btn-btn-plus mt-1"
                size="lg"
                onClick={applyProduct}
              >
                <BsCheck size="36" /> <small>Adicionar pedido</small>
              </Button>
            </Row>
          </Container>
        </Form>

        <div
          className="bg-white py-2 px-2 text-custom-blue rounded"
          style={{
            height: 250,
            maxHeight: 250,
            overflow: "scroll",
          }}
        >
          <Table responsive>
            <thead>
              <tr>
                <th>Quantidade</th>
                <th>Produto</th>
                <th>Subtotal</th>
                <th>Ações</th>
              </tr>
            </thead>
            {data.length > 0 &&
              data.map((list, key) => (
                <tbody key={key} className={`product_${key}_${list.productId}`}>
                  <tr>
                    <td>{list.quantity}</td>
                    <td>{list.name}</td>
                    <td>{list.price * list.quantity}</td>
                    <td>
                      <BsTrash
                        color="red"
                        onClick={() => removeProducts(key)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
          </Table>
        </div>
        <Container>
          <Row className="align-items-center justify-content-center">
            <FormGroup as={Col} className="mt-3" lg={2}>
              <FormLabel className="form-label-order">
                Total do pedido:
              </FormLabel>
              <FormControl
                type="currency"
                className="py-3"
                readOnly
                value={totalAmout}
              />
            </FormGroup>
            <Button
              as={Col}
              variant="custom-orange btn-plus"
              className="text-white mx-2 mt-3"
              size="lg"
              lg={2}
              onClick={removeAll}
            >
              <BsX />
            </Button>
            <Button
              as={Col}
              variant="custom-green"
              className="text-white btn-send mt-3"
              size="lg"
              lg={2}
              onClick={addOrder}
            >
              ENVIAR PEDIDO
            </Button>
          </Row>
        </Container>
      </Container>
    </S.Wrapper>
  );
};

export async function getServerSideProps({ params }) {

  const data = await CategoriesService.index();
  const categories = data.categories;
  const products = await ProductsService.index(
    "/storefront/v1/products?length=99"
  );

  return { props: { categories, products, id: params.id } };
}

export default tableOrder;
