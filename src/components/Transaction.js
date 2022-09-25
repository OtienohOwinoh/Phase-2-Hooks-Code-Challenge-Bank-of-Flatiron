import React from "react";

function Transaction(props) {
  return (
    <tr>
      <td>{props.obj.date}</td>
      <td>{props.obj.description}</td>
      <td>{props.obj.category}</td>
      <td>{props.obj.amount}</td>
    </tr>
  );
}

export default Transaction;
