import React from "react";
import "./item.css";
const Menu = (props) => {
  const { title, number } = props;
  const status = number < 0 ? "expance" : "income";
  const symbol = number < 0 ? "-" : "+";
  return (
    <div>
      <li className={status}>
        {title}
        <span>
          {symbol}
          {Math.abs(number)}
        </span>
      </li>
    </div>
  );
};

export default Menu;
