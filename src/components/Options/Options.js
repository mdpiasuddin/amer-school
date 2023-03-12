import React from "react";
import { useState } from "react";
import Calculation from "../Calculation/Calculation";

import "./options.css";
const Options = ({ options, correctanswer }) => {
  const [correctc, setcorrectc] = useState(0);
  const [ncorrectc, setncorrectc] = useState(0);
  const hsndleoption = (i) => {
    if (i === correctanswer) {
      alert("correct");
      setcorrectc(correctc + 1);
    } else {
      alert("not corect");
      setncorrectc(ncorrectc + 1);
    }
  };

  return (
    <div>
      <div className="optionss p-4 mb-4  ">
        {options.map((i) => (
          <div>
            <div class="form-check ">
              <input
                class="form-check-input"
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
      </div>
    </div>
  );
};

export default Options;
