import React from "react";
import { useState } from "react";

export default function TableItems(listItems) {
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
          <td>Qty</td>
          <td>
            <button type="button" className="btn btn-danger">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
