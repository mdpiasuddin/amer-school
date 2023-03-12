import React from "react";
import Options from "../Options/Options";

const ShowQuestion = ({ i }) => {
  const { id, question, options, correctAnswer } = i;

  return (
    <div>
      <h5 className="mb-3">question: {question}</h5>
      <Options key={id} options={options}></Options>
    </div>
  );
};

export default ShowQuestion;
