import DataContext from "./data/DataContext";
import { useContext } from "react";
import "./item.css";
const Report = () => {
  const { income, expance } = useContext(DataContext);
  const statusIn = "income";
  const statusEx = "expance";

  return (
    <div>
      <p className={statusIn}>รายรับ {income}</p>
      <p className={statusEx}>รายจ่าย {expance}</p>
    </div>
  );
};
export default Report;
