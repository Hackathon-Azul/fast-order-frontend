import type { NextPage } from 'next'
import { Container, FormControl, Form, FormGroup, Button, Col, Row } from "react-bootstrap"
import { BsPlus, BsCheck, BsTrash } from "react-icons/bs"
import Header from '../components/Header'
import { BsChevronLeft } from "react-icons/bs"
import { useEffect, useState } from 'react'

const tableOrder: NextPage = () => {

  const [productPrice, setProductPrice] = useState(0)
  const [productDescription, setProductDescription] = useState('')
  const [productQuantity, setProductQuantity] = useState(0)
  const [productList, setProductList] = useState([])

  function chooseProduct(e){
    let product = e.target.value.split("R$")
    const productDescription = product[0]
    const productPrice = product[1]

    setProductPrice(productPrice)
    setProductDescription(productDescription)

    console.log(productDescription, productPrice)
  }

  function chooseQuantity(e){
    setProductQuantity(e.target.value)
    console.log(e.target.value)
  }

  function calcPrice(){
    setProductPrice(productPrice * productQuantity)
  }

  function applyProduct(){
    setProductPrice(productPrice)
    setProductList((arr) => [...arr, {quantity:productQuantity, product: productDescription, price: productPrice}])
    console.log(productList)
  }

  

  return (
    <>
      <Header>
        <a style={{color:'white',textDecoration:'none'}} href="/tables"><BsChevronLeft size="36" /></a>
        <span>Mesa 001</span>
      </Header>
      <Container>
        <Form className="mt-4">

          <FormGroup className="mb-3">
            <FormControl as="select" className="py-3 bg-white">
              <option>Selecione a Categoria de Produtos</option>
              <option value="1">Categoria 001</option>
              <option value="2">Categoria 002</option>
              <option value="3">Categoria 003</option>
              <option value="3">Categoria 004</option>
            </FormControl>
          </FormGroup>

          <FormGroup className="mb-3">
            <FormControl as="select" className="py-3 bg-white" onChange={chooseProduct}>
              <option>Produtos da Categoria</option>
              <option value="Produto A - R$10.00">Produto A - R$10,00</option>
              <option value="Produto B - R$25.00">Produto B - R$25,00</option>
              <option value="Produto C - R$35.00">Produto C - R$35,00</option>
              <option value="Produto D - R$45.00">Produto D - R$45,00</option>
            </FormControl>
          </FormGroup>

          <FormGroup className="mb-3">
            <FormControl as="textarea" className="py-3" placeholder="Observações" />
          </FormGroup>

          <Row className="flex align-items-baseline">
            <Col>
              <FormGroup className="mb-3">
                <FormControl type="number" className="py-3" readOnly value={Number(productPrice).toFixed(2)} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormControl type="number" className="py-3" min="1"  onChange={chooseQuantity}/>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <div className="d-grid gap-2">
                <Button variant="custom-orange" className="text-white" size="lg" onClick={calcPrice}>
                  <BsCheck size="36" />
                </Button>
              </div>
            </Col>
            <Col sm={2}>
              <div className="d-grid gap-2">
                <Button variant="custom-orange" className="text-white" size="lg" onClick={applyProduct}>
                  <BsPlus size="36" />
                </Button>
              </div>
            </Col>
          </Row>
        </Form>

        <div className='bg-white py-2 px-2 text-custom-blue rounded' style={{height:250,maxHeight:250,overflow:'scroll'}}>
          {productList.map((list, key) => <p key={key}>{list.quantity}x {list.product} R${list.price}</p>)}
        </div>

        <Row className="flex align-items-baseline">
          <Col>
            <FormGroup className="mt-3">
              <FormControl type="number" className="py-3" readOnly />
            </FormGroup>
          </Col>
          <Col sm={2}>
            <Button variant="custom-orange" className="text-white" size="lg" onClick={() => {}}>
              <BsTrash size="36" />
            </Button>
          </Col>
          <Col sm={4}>
            <Button variant="custom-green" className="text-white" size="lg" onClick={() => {}}>
              ENVIAR PEDIDO
            </Button>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default tableOrder