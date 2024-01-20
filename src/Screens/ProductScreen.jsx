import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
// import Rating from "../Components/Rating";
import products from "../products";
import './ProductScreen.css';

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 style={{ textAlign: "left" }}>{product.name}</h4>
              </Col>
            </Row>

            <Row>
              <Col>
                <strong>Author:</strong> {product.author}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Genre:</strong> {product.genre}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Language:</strong> {product.language}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Synopsis:</strong>
              </Col>
            </Row>
            <Row>
              <span style={{ fontStyle: "italic", fontSize: "small" }}>
                {product.synopsis}
              </span>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="items-center">
            <Row>
              <Link to="/chapter" style={{ color: "inherit" }}>
                <Button className="btn-block customButton" type="button">
                  Read Now
                </Button>
              </Link>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Link to="/" className="close-button">
          <i className="fas fa-times"></i>
        </Link>
      </Col>
    </Row>
  );
}

export default ProductScreen;
