import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { VerticalsGraph } from "./VerticalGraph";
const Holdings = () => {
  const [allholdings, setallholdings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/allholding").then((res) => {
      setallholdings(res.data);
    }
    )
  }, []);

  const labels = allholdings.map((subArray)=> subArray["name"]);

   const data = {
    labels,
    datasets:[
      {
        labels:'Stock Name',
        data:allholdings.map((stock)=> stock.price),
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
   }
  
  return (
    <>
      <h3 className="title">Holdings {allholdings.length}</h3>
   
      <div className="order-table">

        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          {
            allholdings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayclass = stock.isLoss ? "loss" : "profit"
              return (
                <thead key={index}>
                  <tr key={index}>

                    {/*  product name */}
                    <td>{stock.name}</td>

                    {/* product quantity */}
                    <td>{stock.qty}</td>

                    {/* sproduct average cost*/}
                    <td>{(stock.avg).toFixed(2)}</td>
                     
                     {/* product LTP (last traded price ) */}
                    <td>{(stock.price).toFixed(2)}</td>
                     
                     {/*current value  */}
                    <td>{(stock.price * stock.qty).toFixed(2)}</td>

                     {/* profit and loss */}
                     <td className={profitClass}> {(currValue-stock.avg * stock.qty).toFixed(2)}</td>

                       {/* product net  */}
                    <td className={dayclass}>{stock.net}</td>

                    {/* product day*/}
                    <td className={dayclass}>{stock.day}</td>
                  </tr>
                </thead>
              )
            })
          }
        </table>
      </div>
      <VerticalsGraph data={data}/>
    </>
  );
};

export default Holdings;
