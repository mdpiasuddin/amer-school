import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./options.css";
const Options = ({ options }) => {
  console.log(options);
  return (
    <div className="optionss p-4 mb-4  ">
      {options.map((i) => (
        <div>
          <div class="form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={i}
            />
            <label class="form-check-label" for={i}>
              {i}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
