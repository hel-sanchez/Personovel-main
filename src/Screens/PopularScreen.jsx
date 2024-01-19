import React from "react";
import { Row, Col} from 'react-bootstrap'
import Product from '../Components/Product'
import products from "../products";

function PopularScreen() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Popular Novels</h1>  
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
    </div>
  );
}

export default PopularScreen;
