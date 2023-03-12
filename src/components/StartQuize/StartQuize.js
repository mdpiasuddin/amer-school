import React from "react";
import { useLoaderData } from "react-router-dom";
import Calculation from "../Calculation/Calculation";
import Questions from "../Questions/Questions";
import "./startquize.css";

const StartQuize = () => {
  const data = useLoaderData();
  const { id, logo, name, questions } = data.data;
  let c;
  let nc;

  let countt = (correctc, ncorrectc) => {
    c = correctc;
    nc = ncorrectc;
  };

  return (
    <div>
      <h1>Quize About topic {name}</h1>
      <img className="quize-test-logo" src={logo} alt="" />
      <Questions count={() => {}} key={id} questions={questions}></Questions>
      <Calculation c={c} nc={nc}></Calculation>
    </div>
  );
};

export default StartQuize;
