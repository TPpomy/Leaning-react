import DataContext from "./data/DataContext";
import { useContext } from "react";
import "./item.css";
const Report = () => {
  const { income, expance } = useContext(DataContext);
  const formatnumber = (num) => {
    return num.toLocaleString();
  };
  return (
    <div>
      <h4>ยอดคงเหลือ</h4>
      <h1>{formatnumber(income - expance)}</h1>
      <div className="report-contant">
        <div className="report-income">
          <h4>ยอดรายรับ</h4>
          <p>{formatnumber(income)}</p>
        </div>
        <div className="report-expance">
          <h4>ยอดรายจ่าย</h4>
          <p>{formatnumber(expance)}</p>
        </div>
      </div>
    </div>
  );
};
export default Report;
