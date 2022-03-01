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
import { BsCheck, BsPlus, BsTrash, BsX } from "react-icons/bs";
import Header from "../../components/Header";
import { BsChevronLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import CategoriesService from "services/categories";
import Category from "dtos/Category";
import ProductsService, { IProductsIndexData } from "services/products";
import Product from "dtos/Product";
import Link from "next/link";
import * as S from "./styles";

type Props = {
  categories: { categories: Category[] };
  products: IProductsIndexData;
  id: number;
};

const tableOrder: React.FC<Props> = ({
  categories: { categories },
  products,
  id,
}) => {
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<[Product] | []>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalAmout, setTotalAmout] = useState(0);
  const [product, setProduct] = useState<Product>();
  const [comments, setComments] = useState<string | undefined>();

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
    const subTotal = productPrice * productQuantity;
    const total = productList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      subTotal
    );
    setTotalAmout(total);
  }

  function applyProduct() {
    setProductList((arr) => [
      ...arr,
      {
        quantity: productQuantity,
        description: productDescription,
        name: product.name,
        price: productPrice,
        productId: product.id,
        comments,
      },
    ]);

    calcPrice();
  }

  useEffect(() => {
    const newProducts = products.products.filter(
      (product) => product.category.title === selectedCategory
    );
    setSelectedProduct(newProducts as [Product]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const removeProducts = (key: number, className: string) => {
    setTotalAmout(
      totalAmout - productList[key].price * productList[key].quantity
    );
    const newList = productList.splice(key, 1);

    setProductList(newList);

    const tableData = document.querySelector(`.${className}`);
    tableData.remove();
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
              placeholder="Observações"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </FormGroup>

          <Row className="flex align-items-baseline">
            <Col lg={12}>
              <FormGroup className="mb-3">
                <FormLabel className="form-label-order" lg={6}>
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
            <Col lg={12}>
              <FormGroup className="mb-3">
                <FormLabel className="form-label-order">Quantidade: </FormLabel>
                <FormControl
                  type="number"
                  className="py-3"
                  min="1"
                  onChange={chooseQuantity}
                />
              </FormGroup>
            </Col>
            <Col lg={12} sm={2}>
              <div className="d-grid gap-2">
                <Button
                  variant="custom-orange"
                  className="text-white"
                  size="lg"
                  onClick={applyProduct}
                >
                  Adicionar pedido <BsPlus size="36" />
                </Button>
              </div>
            </Col>
          </Row>
        </Form>

        <div
          className="bg-white py-2 px-2 text-custom-blue rounded"
          style={{ height: 250, maxHeight: 250, overflow: "scroll" }}
        >
          <Table responsive>
            <thead>
              <tr>
                <th>Quantidade</th>
                <th>Produto</th>
                <th>Subtotal</th>
                <th>Remover</th>
              </tr>
            </thead>
            {productList.map((list, key) => (
              <tbody key={key}>
                <tr className={`product_${key}`}>
                  <td>{list.quantity}</td>
                  <td>{list.name}</td>
                  <td>{list.price * list.quantity}</td>
                  <td
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <BsTrash
                      color="red"
                      onClick={() => removeProducts(key, `product_${key}`)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>

        <Row sm={10} className="flex align-items-baseline checkout-container">
          <Col lg={6} sm={6}>
            <FormGroup className="mt-3">
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
          </Col>
          <Col lg={1} md={4} sm={2}>
            <Button
              variant="custom-orange"
              className="text-white btn-x"
              size="lg"
            >
              <BsX  />
            </Button>
          </Col>
          <Col lg={5} md={4} sm={2}>
            <S.ButtonContainer>
              <Button
                variant="custom-green"
                className="text-white btn-send"
                size="lg"
                onClick={() => {}}
              >
                ENVIAR PEDIDO
              </Button>
            </S.ButtonContainer>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  );
};

export async function getServerSideProps({ params }) {
  const categories = await CategoriesService.index();
  const products = await ProductsService.index(
    "http://localhost:3000/storefront/v1/products?length=99"
  );
  return { props: { categories, products, id: params.id } };
}

export default tableOrder;
