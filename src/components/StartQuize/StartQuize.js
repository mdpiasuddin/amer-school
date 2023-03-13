import React from "react";
import { useLoaderData } from "react-router-dom";
import Calculation from "../Calculation/Calculation";
import Questions from "../Questions/Questions";
import "./startquize.css";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const StartQuize = () => {
  const data = useLoaderData();
  const { id, logo, name, questions } = data.data;
  const [c, setc] = useState(0);
  const [nc, setnc] = useState(0);

  let countt = (correctc, ncorrectc) => {
    setc(c + correctc);
    setnc(nc + ncorrectc);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            <h1>Quize About topic {name}</h1>
            <img className="quize-test-logo" src={logo} alt="" />
            <Questions
              count={countt}
              key={id}
              questions={questions}
            ></Questions>
          </Col>
          <Col lg={4}>
            <Calculation c={c} nc={nc}></Calculation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StartQuize;
