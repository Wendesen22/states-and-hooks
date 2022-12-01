import React from "react";
import "./App.css";
import MyCounter from "./myComponents/MyCounter";
import IncreaseDecreaseCount from "./myComponents/IncreaseDecreaseCount";
import UseEffectForTitle from "./myComponents/UseEffectForTitle";

function App() {
  return (
    <div className="App">
      <MyCounter />
      <IncreaseDecreaseCount />
      <UseEffectForTitle />
    </div>
  );
}

export default App;