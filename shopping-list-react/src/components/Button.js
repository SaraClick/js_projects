import React from "react";

const buttonColor = "btn-success" || "btn-danger"; // so we can dinamically chose if green (Add) or red (Remove)

const ButtonAdd = () => {
  return (
    <button type="button" className="btn btn-success">
      Button
    </button>
  );
};

export default ButtonAdd;
