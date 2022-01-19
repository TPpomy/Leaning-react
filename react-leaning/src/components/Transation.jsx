import DataContext from "./data/DataContext";
import Menu from "./Menu";
import { useContext } from "react";
import "./Transation.css";
const Transation = (props) => {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((element) => {
          return <Menu {...element} key={element.id} />;
        })}
      </ul>
    </div>
  );
};

export default Transation;
