import React from "react";
import Calculation from "../Calculation/Calculation";
import ShowQuestion from "../ShowQuestion/ShowQuestion";

const Questions = ({ questions, count }) => {
  return (
    <div>
      {questions.map((i, index) => (
        <ShowQuestion count={count} key={index} i={i}></ShowQuestion>
      ))}
    </div>
  );
};

export default Questions;
