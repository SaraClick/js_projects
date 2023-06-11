import React from "react";

const DataInput = () => {
  return (
    <div className="container">
      {/* THESE 2 NEXT ELEMENTS SHOULD BE INPUTS BUT AT THE MOMENT WE ARE PUTTING PLACEHOLDERS */}
      <p>Item</p>
      <p>Qty</p>
      <button type="button" className="btn btn-success">
        Button
      </button>
    </div>
  );
};

export default DataInput;
