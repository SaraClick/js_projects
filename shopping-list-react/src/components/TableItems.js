import React from "react";

const TableItems = (listItems) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Qty</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>itemName</td>
          <td>itemQty</td>
          <td>
            <button type="button" className="btn btn-danger">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableItems;
