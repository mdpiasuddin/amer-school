import React from "react";
import { Button } from "react-bootstrap";
import "./quizecart.css";
const QuizeCart = ({ i }) => {
  const { name, logo } = i;
  return (
    <div className="cartQuize p-5 w-100">
      <h5>Course: {name}</h5>
      <img src={logo} alt="" />
      <Button className="m-4">Start a quize</Button>
    </div>
  );
};

export default QuizeCart;
