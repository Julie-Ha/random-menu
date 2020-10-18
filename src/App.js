import React from "react";
import "./tailwind.output.css";
import Dish from "./components/Dish";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl text-gray-400 text-center m-4">Menu</h1>
      <div className="flex flex-col sm:flex-row">
        <Dish title="Entrées" color="green" dishType="starters"/>
        <Dish title="Plats" color="orange" dishType="dish" />
        <Dish title="Dessert" color="indigo" dishType="dessert"/>
      </div>
    </div>
  );
}

export default App;
