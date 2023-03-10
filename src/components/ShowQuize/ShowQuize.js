import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuizeCart from "../QuizeCart/QuizeCart";
import "./showQuize.css";

const ShowQuize = () => {
  const [showquize, setShowquize] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setShowquize(data.data));
  }, []);
  return (
    <div>
      <section className="my-5">
        <Container>
          <div className="text-li ">
            <h1>Start quize </h1>
            <p>Here are some quize. Evrebody can take challange from it</p>
          </div>
          <Row>
            {showquize.map((i) => (
              <Col lg={4}>
                {" "}
                <QuizeCart key={i.id} i={i}></QuizeCart>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ShowQuize;
