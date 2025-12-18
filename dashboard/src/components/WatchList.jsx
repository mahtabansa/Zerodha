import React, { useState } from "react";
import { watchlist } from "../assets/data/data ";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import BarChartOutline from '@mui/icons-material/BarChart'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GeneralContext from "./GeneralContextProvider";
import { useContext } from "react";
import { Doughnut } from "react-chartjs-2"
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
 const data = {
  labels:watchlist.map((subArray)=>subArray['name']),
  datasets: [
    {
      label: 'Stock name',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(2, 2, 1, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <div className="watchlist-container hide-scrollbar " >
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {  watchlist.map((stock, index) => {
            return (
              <WatchlistItem stock={stock} key={index} />
             )
          })
        }
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};


export default WatchList;

const WatchlistItem = ({ stock }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setshowWatchListActions(true);
  }
  const handleMouseLeave = (e) => {
    setshowWatchListActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}> {stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {
            stock.isDown ? (<KeyboardArrowDownIcon className="down" />) : (<KeyboardArrowUpIcon className="up" />)
          }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  )

}


const WatchListActions = ({ uid }) => {
  const {openBuyWindow} = useContext(GeneralContext);


  const handleBuyClick = () => {
    openBuyWindow(uid);
  };
   
  return (
  <span className="actions">
    <span className="">
        <Tooltip title="buy(B)"
        placement="top"
        arrow
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>

         <Tooltip title="sell(S)"
        placement="top"
        arrow
        >
          <button className="sell" to="/">Sell</button>
        </Tooltip>
        
        
        <Tooltip title="Analytics(A)"
        placement="top"
        arrow
        >
          <button className="action">
            <BarChartOutline className="icon"/>
            </button>
        </Tooltip>
        
        <Tooltip title="More(M)"
        placement="top"
        arrow
       >
          <button className="action">
            <MoreHorizIcon className="icon"/>
          </button>
        </Tooltip>
    </span>
  </span>
  )
}


