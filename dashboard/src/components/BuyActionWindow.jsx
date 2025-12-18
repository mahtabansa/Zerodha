import React from 'react'
import "./BuyActionWindow.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import GeneralContext from './GeneralContextProvider';
import { useContext } from 'react';

const BuyActionWindow = ({uid}) => {
      const { closeBuyWindow } = useContext(GeneralContext);
      const [stockQuantity, setStockQuantity] = useState(1);
      const [stockPrice, setStockPrice] = useState(0.0);

      const handleBuybtnClick = async() => {
           await axios.post(`${import.meta.env.VITE_API_URL}/neworder`, {
                  name: uid,
                  qty:Number( stockQuantity),
                  price: Number(stockPrice),
                  mode: 'BUY',
            });
       closeBuyWindow();
      }
    
      const handleCancelClick = () => {
             closeBuyWindow();
      };
      return (
            <div className="container" id="buy-window" draggable="true">
                  <div className="regular-order">
                        <div className="inputs">
                              <fieldset>
                                    <legend>quanty..</legend>
                                    <input
                                          type='number'
                                          name='qty'
                                          id='qty'
                                          onChange={(e) => setStockQuantity(e.target.value)}
                                          value={stockQuantity}
                                    ></input>
                              </fieldset>

                              <fieldset>
                                    <legend>price..</legend>
                                    <input
                                          type='number'
                                          name='price'
                                           id='price'
                                          step="0.05"
                                          onChange={(e) => setStockPrice(e.target.value)}
                                          value={stockPrice}
                                    ></input>
                              </fieldset>
                        </div>
                  </div>

                  <div className="button">
                        <span>margin required 150.65 &#8377;</span>
                        <Link  className="btn btn-blue" onClick={handleBuybtnClick}>Buy</Link>
                        <Link to='' className='btn btn-gray' onClick={handleCancelClick}>cancel</Link>
                  </div>

            </div>
      )
}

export default BuyActionWindow
