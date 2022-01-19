import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import "./App.css";
import Transation from "./components/Transation";
import DataContext from "./components/data/DataContext";
import Report from "./components/Report";
function App() {
  const initState = [
    { id: 1, title: "data1", number: 1000 },
    { id: 2, title: "data2", number: -1000 },
    { id: 3, title: "data3", number: 5000 },
    { id: 4, title: "data4", number: -3000 },
  ];
  const [dataIncome, setdataIncome] = useState(0);
  const [dataExpance, setdataExpance] = useState(0);
  const [items, setItems] = useState(initState);
  useEffect(() => {
    const costs = items.map((items) => items.number);

    const costsEx =
      costs.filter((e) => e < 0).reduce((total, e) => (total += e), 0) * -1;
    const costsIn = costs
      .filter((e) => e > 0)
      .reduce((total, e) => (total += e), 0);
    setdataExpance(costsEx);
    setdataIncome(costsIn);
  }, [items, dataExpance, dataIncome]);
  const addNewitem = (newItem) => {
    setItems((e) => {
      return [newItem, ...e];
    });
  };
  return (
    <DataContext.Provider value={{ income: dataIncome, expance: dataExpance }}>
      <div>
        <Navbar />
        <Report />
        <Content onAdditem={addNewitem} />
        <Transation items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
