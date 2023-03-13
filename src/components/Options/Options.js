import React from "react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

import "./options.css";
const Options = ({ options, correctanswer, count }) => {
  const [correctc, setcorrectc] = useState(0);
  const [ncorrectc, setncorrectc] = useState(0);
  const [secorrectAnswer, setsecorrectAnswer] = useState(false);
  const hsndleoption = (i) => {
    if (i === correctanswer) {
      alert("correct");
      setcorrectc(1);
    } else {
      alert("not corect");
      setncorrectc(1);
    }
  };
  const handleCorrect = () => {
    if (secorrectAnswer === false) {
      setsecorrectAnswer(true);
    } else {
      setsecorrectAnswer(false);
    }
  };

  count(correctc, ncorrectc);
  return (
    <div>
      <div className="optionss p-4 mb-4  ">
        <h3 className="iconss " onClick={handleCorrect}>
          <AiFillEye />
        </h3>
        {options.map((i) => (
          <div>
            <div className="form-check option-display">
              <input
                className="form-check-input me-5"
                type="radio"
                name="flexRadioDefault"
                id={i}
                onClick={() => hsndleoption(i)}
              />
              <label class="form-check-label" for={i}>
                {i}
              </label>
            </div>
          </div>
        ))}
        {secorrectAnswer ? (
          <h3>correct Answer= {correctanswer}</h3>
        ) : (
          console.log("no")
        )}
      </div>
    </div>
  );
};

export default Options;
