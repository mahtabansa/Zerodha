import React, { act, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu,setselectedMenu] = useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownopen] = useState(false);

  const handleMenu = (index)=> {
    setselectedMenu(index)
  }
  const profileClick = (index) => {
  
    setIsProfileDropdownopen(!isProfileDropdownOpen);
  }
  const menuClass = 'menu';
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}} onClick={()=>handleMenu(0)}>
            <p  className={!selectedMenu === 0 ? activeMenuClass :menuClass } >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{textDecoration:"none"}} onClick={()=> handleMenu(1)}>
            <p className={!selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{textDecoration:"none"}} onClick={()=>handleMenu(2)}>
            <p className={!selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{textDecoration:"none"}} onClick={()=>handleMenu(3)}>
            <p className={!selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds"  style={{textDecoration:"none"}} onClick={()=>handleMenu(4)}>
            <p className={!selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{textDecoration:"none"}} onClick={()=>handleMenu(5)}>
            <p className={!selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={()=>profileClick()} >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
