import React from "react";
import "./tailwind.output.css";
import Dish from "./components/Dish";
import RandomDish from "./components/RandomDish";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl text-gray-500 text-center m-4 mb-6">Menu</h1>
      <div className="flex flex-col sm:flex-row mb-6">
        <RandomDish color="green" dishType="starters"/>
        <RandomDish color="orange" dishType="dish" />
        <RandomDish color="indigo" dishType="dessert" />
      </div>
      <div className="flex flex-col sm:flex-row">
        <Dish title="Entrées" placeholder="Ajouter une entrée" color="green" dishType="starters" />
        <Dish title="Plats" placeholder="Ajouter un plat" color="orange" dishType="dish" />
        <Dish title="Dessert" placeholder="Ajouter un dessert" color="indigo" dishType="dessert" />
      </div>
    </div>
  );
}

export default App;
