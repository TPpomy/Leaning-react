import React from "react";
import "./item.css";
import { useContext } from "react";
import DataContext from "./data/DataContext";
const Menu = (props) => {
  const { title, number } = props;
  const status = number < 0 ? "expance" : "income";
  const symbol = number < 0 ? "-" : "+";
  const formatnumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div>
      <li className={status}>
        {title}
        <span>
          {symbol}
          {formatnumber(Math.abs(number))}
        </span>
      </li>
    </div>
  );
};

export default Menu;
