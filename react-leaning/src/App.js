import React, { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import "./App.css";
import Transation from "./components/Transation";

function App() {
  const [items, setItems] = useState([]);
  const addNewitem = (newItem) => {
    setItems((e) => {
      return [newItem, ...e];
    });
  };
  return (
    <div>
      <Navbar />
      <Content onAdditem={addNewitem} />
      <Transation items={items} />
    </div>
  );
}

export default App;
