import React from "react";
import Calculation from "../Calculation/Calculation";
import ShowQuestion from "../ShowQuestion/ShowQuestion";

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((i, index) => (
        <ShowQuestion key={index} i={i}></ShowQuestion>
      ))}
    </div>
  );
};

export default Questions;
