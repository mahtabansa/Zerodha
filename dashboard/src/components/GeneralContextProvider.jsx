import React, { useState } from "react";


import BuyActionWindow from "./BuyActionWindow";
import { createContext } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({children}) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // const handleOpenBuyWindow = (uid) => {
  //   setIsBuyWindowOpen(true);
  //   setSelectedStockUID(uid);
  // };

  // const handleCloseBuyWindow = () => {
  //   setIsBuyWindowOpen(false);
  //   setSelectedStockUID("");
  // };


  const openBuyWindow = (uid) => {
  setIsBuyWindowOpen(true);
  setSelectedStockUID(uid);
};

const closeBuyWindow = () => {
  setIsBuyWindowOpen(false);
  setSelectedStockUID("");
};


  return (
    <GeneralContext.Provider
  value={{
    openBuyWindow ,
    closeBuyWindow ,
  }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;