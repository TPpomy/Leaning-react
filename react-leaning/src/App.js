import React, { useState, useEffect, useReducer } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import "./App.css";
import Transation from "./components/Transation";
import DataContext from "./components/data/DataContext";
import Report from "./components/Report";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  const [dataIncome, setdataIncome] = useState(0);
  const [dataExpance, setdataExpance] = useState(0);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

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
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShow(true);
      case "HIDE":
        return setShow(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, show);
  return (
    <DataContext.Provider value={{ income: dataIncome, expance: dataExpance }}>
      <div>
        <Navbar />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">บันทึกข้อมูล</Link>
              </li>
              <li>
                <Link to="/save">ข้อมูลบัญชี</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <Content onAdditem={addNewitem} />
                <Transation items={items} />
              </Route>
              <Route path="/save">
                <Report />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
