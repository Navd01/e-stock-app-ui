import React from "react";
import Table from "react-bootstrap/Table";
import "./StockTable.css";

export default function StockTable({ props }) {
  console.log("tjisis props", props);
  const { propStocks, propMin, propMax, propAvg } = props;
  console.log("thisisis prpstocs", propStocks);
  if (!propStocks) return null;

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
    <div>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Minimum Stock Price</th>
            <th>Maximum Stock Price</th>
            <th>Average Stock Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{propMin}</td>
            <td>{propMax}</td>
            <td>{propAvg}</td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>STOCK PRICE</th>
            <th>CREATED AT</th>
          </tr>
        </thead>
        <tbody>{propStocks.map(renderStock)}</tbody>
      </Table>
    </div>
  );
}
