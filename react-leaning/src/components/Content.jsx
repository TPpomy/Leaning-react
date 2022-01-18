import { useState, useEffect } from "react";
import "../components/Style-control.css";
import { v4 as uuid4 } from "uuid";

const Content = (props) => {
  const [datatext, setDatatext] = useState("");
  const [datanum, setDatanum] = useState(0);
  const [formValid, setFormValid] = useState(false);
  const inputTitle = (event) => {
    setDatatext(event.target.value);
  };
  const numberTitle = (event) => {
    setDatanum(event.target.value);
  };
  const saveData = (event) => {
    event.preventDefault();
    const itemdata = {
      id: uuid4(),
      title: datatext,
      number: Number(datanum),
    };
    props.onAdditem(itemdata);
    setDatanum(0);
    setDatatext("");
  };
  useEffect(() => {
    setFormValid(datatext.trim().length > 0 && datanum !== 0);
  }, [datatext, datanum]);
  return (
    <div>
      <form onSubmit={saveData}>
        <div className="from-input">
          <label>Data</label>
          <input
            type="text"
            placeholder="ใส่จำนวนข้อมูล"
            onChange={inputTitle}
            value={datatext}
          />
        </div>
        <div className="from-input">
          <label>Number</label>
          <input
            type="text"
            placeholder="ใส่จำนวนเงิน"
            onChange={numberTitle}
            value={datanum}
          />
        </div>
        <div className="from-input">
          <button type="submit" className="btn" disabled={!formValid}>
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
};

export default Content;
