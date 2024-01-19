import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
// import Rating from "../Components/Rating";
import products from "../products";

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
            <Row><Col><h4 style={{ textAlign: "left" }}>{product.name}</h4></Col></Row>
          
            <Row><Col>Author: {product.author}</Col></Row>
            <Row><Col>Genre: {product.genre}</Col></Row>
            <Row><Col>Language: {product.language}</Col></Row>
            <Row><Col>Synopsis:</Col></Row>
            <Row><span style={{ fontStyle: "italic", fontSize: "small"  }}>{product.synopsis}</span></Row>
          </ListGroup.Item>
          <ListGroup.Item className="items-center">
            <Row>
              <Button
                className="btn-block"
                type="button"
              >
                Read Now
              </Button>
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
