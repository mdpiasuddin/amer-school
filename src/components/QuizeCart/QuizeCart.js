import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./quizecart.css";
const QuizeCart = ({ i }) => {
  const { name, logo, id } = i;
  return (
    <div className="cartQuize p-3 w-100 mb-3">
      <h5>Course: {name}</h5>
      <img src={logo} alt="" />
      <Link to={`/quize/${id}`}>
        <Button className="m-4">Start a quize</Button>
      </Link>
    </div>
  );
};

export default QuizeCart;
