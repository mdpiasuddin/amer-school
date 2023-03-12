import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import "./startquize.css";

const StartQuize = () => {
  const data = useLoaderData();

  const { id, logo, name, questions } = data.data;

  return (
    <div>
      <h1>Quize About topic {name}</h1>
      <img className="quize-test-logo" src={logo} alt="" />
      <Questions key={id} questions={questions}></Questions>
    </div>
  );
};

export default StartQuize;
