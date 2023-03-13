import React from "react";
import Options from "../Options/Options";
import "../Calculation/Calculation";

const ShowQuestion = ({ i, count }) => {
  const { id, question, options, correctAnswer } = i;

  return (
    <div>
      <h5 className="mb-3">question: {question}</h5>
      <Options
        key={id}
        options={options}
        correctanswer={correctAnswer}
        count={count}
      ></Options>
    </div>
  );
};

export default ShowQuestion;
