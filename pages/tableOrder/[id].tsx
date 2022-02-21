import {
    Container,
    FormControl,
    Form,
    FormGroup,
    Button,
    Col,
    Row,
  } from "react-bootstrap";
  import { BsPlus, BsCheck, BsTrash } from "react-icons/bs";
  import Header from "../../components/Header";
  import { BsChevronLeft } from "react-icons/bs";
  import { useEffect, useState } from "react";
  import CategoriesService from "services/categories";
  import Category from "dtos/Category";
  import ProductsService, { IProductsIndexData } from "services/products";
  import Product from "dtos/Product";
  
  type Props = {
    categories: { categories: Category[] };
    products: IProductsIndexData;
    id: number
  };
  const tableOrder: React.FC<Props> = ({ categories: { categories }, products, id }) => {
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState("");
    const [productQuantity, setProductQuantity] = useState(0);
    const [productList, setProductList] = useState<[Product]>([]);
    const [selectedProduct, setSelectedProduct] = useState<[Product]>([]);
    const [selectedCategory, setSelectedCategory] = useState()


    function chooseProduct(e) {
      let product = products.products.find(product => product.name === e.target.value)
      const productDescription = product.description;
      const productPrice = product.price;
  
      setProductPrice(productPrice);
      setProductDescription(productDescription);
  
      console.log(productDescription, productPrice);
    }
  
    function chooseQuantity(e) {
      setProductQuantity(e.target.value);
      console.log(e.target.value);
    }
  
    function calcPrice() {
      setProductPrice(productPrice * productQuantity);
    }
  
    function applyProduct() {
      setProductPrice(productPrice);
      setProductList((arr) => [
        ...arr,
        {
          quantity: productQuantity,
          product: productDescription,
          price: productPrice,
        },
      ]);
      console.log(productList);
    }
  
    useEffect(() => {
      const newProducts = products.products.filter(product => product.category.title === selectedCategory)
      setSelectedProduct(newProducts as [Product])
    }, [selectedCategory])

  
    return (
      <>
        <Header>
          <a style={{ color: "white", textDecoration: "none" }} href="/tables">
            <BsChevronLeft size="36" />
          </a>
          <span>Mesa {id}</span>
        </Header>
        <Container>
          <Form className="mt-4">
            <FormGroup className="mb-3">
              <FormControl as="select" className="py-3 bg-white"  onChange={(e) => setSelectedCategory(e.target.value)}>
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
                {selectedProduct.map((product) => (
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
              />
            </FormGroup>
  
            <Row className="flex align-items-baseline">
              <Col>
                <FormGroup className="mb-3">
                  <FormControl
                    type="number"
                    className="py-3"
                    readOnly
                    value={Number(productPrice).toFixed(2)}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="mb-3">
                  <FormControl
                    type="number"
                    className="py-3"
                    min="1"
                    onChange={chooseQuantity}
                  />
                </FormGroup>
              </Col>
              <Col sm={2}>
                <div className="d-grid gap-2">
                  <Button
                    variant="custom-orange"
                    className="text-white"
                    size="lg"
                    onClick={calcPrice}
                  >
                    <BsCheck size="36" />
                  </Button>
                </div>
              </Col>
              <Col sm={2}>
                <div className="d-grid gap-2">
                  <Button
                    variant="custom-orange"
                    className="text-white"
                    size="lg"
                    onClick={applyProduct}
                  >
                    <BsPlus size="36" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
  
          <div
            className="bg-white py-2 px-2 text-custom-blue rounded"
            style={{ height: 250, maxHeight: 250, overflow: "scroll" }}
          >
            {productList.map((list, key) => (
              <p key={key}>
                {list.quantity}x {list.name} R${list.price}
              </p>
            ))}
          </div>
  
          <Row className="flex align-items-baseline">
            <Col>
              <FormGroup className="mt-3">
                <FormControl type="number" className="py-3" readOnly />
              </FormGroup>
            </Col>
            <Col sm={2}>
              <Button
                variant="custom-orange"
                className="text-white"
                size="lg"
                onClick={() => {}}
              >
                <BsTrash size="36" />
              </Button>
            </Col>
            <Col sm={4}>
              <Button
                variant="custom-green"
                className="text-white"
                size="lg"
                onClick={() => {}}
              >
                ENVIAR PEDIDO
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export async function getServerSideProps({ params }) {
    const categories = await CategoriesService.index();
    const products = await ProductsService.index('http://localhost:3000/storefront/v1/products?length=20');
    return { props: { categories, products, id: params.id } };
  }
  
  export default tableOrder;
  