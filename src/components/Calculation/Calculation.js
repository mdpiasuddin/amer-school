import React from "react";

const Calculation = ({ correctc, ncorrectc }) => {
  return (
    <div>
      <h3>correct Answer = {correctc}</h3>
      <h3>wrong Answer = {ncorrectc}</h3>
    </div>
  );
};

export default Calculation;
