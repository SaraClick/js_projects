import React from "react";
import { useState } from "react";

const DataInput = (shoppingList) => {
  const [inputItem, setInputName] = useState("");
  const [inputQty, setinputQty] = useState(0);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Item to add"
        onChange={(event) => {
          setInputName(event.target.value);
        }}
      />
      {/*event is used to access the current item; event.target.value is to access the current value of the input field */}
      <p>{inputItem}</p>
      <input
        type="number"
        placeholder="Quantity"
        onChange={(event) => {
          setinputQty(event.target.value);
        }}
      />
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          console.log(inputItem, inputQty);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default DataInput;
