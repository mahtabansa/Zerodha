import React from "react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Positions = () => {
  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/allposition").then((res) => {
      console.log(res.data);
      setAllPosition(res.data);
    })
  }, [])

  return (
    <>
      <h3 className="title">{allPosition.length}</h3>

      <div className="order-table">

        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>

          {
            allPosition.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";

              return (
               <thead key={index}>
               <tr key={index}>
          
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{(stock.price).toFixed(2)}</td>
                <td className={profitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td>{stock.net}</td>
              </tr>
              </thead>
              )
            })
          }
        </table>
      </div>
    </>
  );
};

export default Positions;
