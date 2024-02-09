import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import products from "../products";

function PopularScreen() {
  return (
    <div className="mb-5">
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "1",
          color: "#00669B",
          fontFamily: "Permanent Marker",
          textDecoration: "underline",
          fontSize: "60px"
        }}
      >
        Popular Novels
      </h1>
      <Row className="mx-2 g-2">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PopularScreen;
