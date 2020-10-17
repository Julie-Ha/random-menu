import React from "react";
import "./tailwind.output.css";
import Dessert from "./components/Dessert";
import Dish from "./components/Dish";
import Starter from "./components/Starter";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl text-gray-400 text-center m-4">Menu</h1>
      <div className="flex flex-col sm:flex-row">
        <Starter />
        <Dish />
        <Dessert />
        
      </div>
    </div>
  );
}

export default App;
