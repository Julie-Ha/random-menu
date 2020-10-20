import React, { useEffect, useState } from "react";
import "./tailwind.output.css";
import Dish from "./components/Dish";
import RandomDish from "./components/RandomDish";

function App() {

  const [randomStarter, setRandomStarter] = useState();
  const [randomDish, setRandomDish] = useState();
  const [randomDessert, setRandomDessert] = useState();

  const generateRandomDish = (dishType) => {
    let dishes;
    if (localStorage.getItem(dishType) === null) {
      dishes = [];
    } else {
      dishes = JSON.parse(localStorage.getItem(dishType));
    }

    if (dishes.length > 0) {
      let randomIndex = Math.floor(Math.random() * Math.floor(dishes.length));
      return dishes[randomIndex];
    }
  };

  const generateMenu = () => {
    setRandomStarter(generateRandomDish("starters"));
    setRandomDish(generateRandomDish("dish"));
    setRandomDessert(generateRandomDish("dessert"));
  }

  useEffect(() => {
    generateMenu();
  }, [])

  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl text-gray-500 text-center m-4 mb-6">Menu</h1>
        <i
          onClick={generateMenu}
          className={
            "fas fa-dice text-4xl text-teal-500 hover:text-teal-400"
          }
        ></i>
      </div>

      <div className="flex flex-col sm:flex-row mb-6">
        <RandomDish color="green" dishType="starters" randomDish={randomStarter} />
        <RandomDish color="orange" dishType="dish" randomDish={randomDish} />
        <RandomDish color="indigo" dishType="dessert" randomDish={randomDessert} />
      </div>
      <div className="flex flex-col sm:flex-row">
        <Dish
          title="Entrées"
          placeholder="Ajouter une entrée"
          color="green"
          dishType="starters"
        />
        <Dish
          title="Plats"
          placeholder="Ajouter un plat"
          color="orange"
          dishType="dish"
        />
        <Dish
          title="Dessert"
          placeholder="Ajouter un dessert"
          color="indigo"
          dishType="dessert"
        />
      </div>
    </div>
  );
}

export default App;
