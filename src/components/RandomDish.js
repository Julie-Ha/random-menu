import React, { useEffect, useState } from "react";

function RandomDish({ color, dishType }) {
  const [randomDish, setRandomDish] = useState("");

  const generateRandomDish = () => {
    let dishes;
    if (localStorage.getItem(dishType) === null) {
      dishes = [];
    } else {
      dishes = JSON.parse(localStorage.getItem(dishType));
    }

    if (dishes.length > 0) {
      let randomIndex = Math.floor(Math.random() * Math.floor(dishes.length));
      setRandomDish(dishes[randomIndex]);
    }
  };

  useEffect(() => {
    generateRandomDish();
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <p className="text-3xl text-gray-600 mr-4">{randomDish}</p>
      <i
        onClick={generateRandomDish}
        className={
          "fas fa-dice text-2xl text-" +
          color +
          "-500 hover:text-" +
          color +
          "-400"
        }
      ></i>
    </div>
  );
}

export default RandomDish;
