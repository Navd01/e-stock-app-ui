import React from "react";
import Table from "react-bootstrap/Table";
import "./StockTable.css";

export default function StockTable({ stocks }) {
  if (!stocks) return null;

  const renderStock = (stock, index) => {
    return (
      <tr key={index}>
        <td>{stock.id}</td>
        <td>{stock.stockPrice}</td>
        <td>{stock.createAt}</td>
      </tr>
    );
  };
  return (
    <Table className="table" striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>STOCK PRICE</th>
          <th>CREATED AT</th>
        </tr>
      </thead>
      <tbody>{stocks.map(renderStock)}</tbody>
    </Table>
  );
}
