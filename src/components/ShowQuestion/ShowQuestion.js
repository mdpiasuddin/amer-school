import React from "react";
import Options from "../Options/Options";
import "../Calculation/Calculation";
import Calculation from "../Calculation/Calculation";

const ShowQuestion = ({ i }) => {
  console.log(i);
  const { id, question, options, correctAnswer } = i;

  return (
    <div>
      <h5 className="mb-3">question: {question}</h5>
      <Options
        key={id}
        options={options}
        correctanswer={correctAnswer}
      ></Options>
    </div>
  );
};

export default ShowQuestion;
