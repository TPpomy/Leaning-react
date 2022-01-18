import Menu from "./Menu";
import "./Transation.css";
const Transation = (props) => {
  const { items } = props;
  console.log(items);
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
