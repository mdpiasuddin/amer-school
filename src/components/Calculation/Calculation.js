import React from "react";

const Calculation = ({ c, nc }) => {
  return (
    <div>
      <h3>correct Answer = {c}</h3>
      <h3>wrong Answer = {nc}</h3>
    </div>
  );
};

export default Calculation;
