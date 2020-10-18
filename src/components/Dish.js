import React, { useEffect, useState } from "react";

function Dish({ title, placeholder, color, dishType }) {
  const [inputText, setInputText] = useState("");
  const [dishesList, setDishesList] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const addDish = (e) => {
    e.preventDefault();

    if (inputText) {
      let dishes;
      if (localStorage.getItem(dishType) === null) {
        dishes = [];
      } else {
        dishes = JSON.parse(localStorage.getItem(dishType));
      }
      dishes.push(inputText);
      localStorage.setItem(dishType, JSON.stringify(dishes));

      setDishesList(JSON.parse(localStorage.getItem(dishType)));
      setInputText("");
    }
  };

  const deleteDish = (e) => {
    let dishId = e.target.getAttribute("data-key");

    let dishes;
    if (localStorage.getItem(dishType) === null) {
      dishes = [];
    } else {
      dishes = JSON.parse(localStorage.getItem(dishType));
    }
    dishes.splice(dishId, 1);
    localStorage.setItem(dishType, JSON.stringify(dishes));
    setDishesList(dishes);
  };

  useEffect(() => {
    let dishes;
    if (localStorage.getItem(dishType) === null) {
      dishes = [];
    } else {
      dishes = JSON.parse(localStorage.getItem(dishType));
    }
    setDishesList(dishes);
  }, [dishType]);

  return (
    <div className="w-full flex flex-col items-center mb-6">
      <h1 className={"text-2xl text-" + color + "-500 m-2"}>{title}</h1>
      <div className="flex justify-center items-center">
        <input
          onChange={inputHandler}
          className={
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-" +
            color +
            "-500"
          }
          type="text"
          value={inputText}
          placeholder={placeholder}
        />
        <button
          className={
            "bg-" +
            color +
            "-500 hover:bg-" +
            color +
            "-400 rounded ml-2 w-8 h-8"
          }
          onClick={addDish}
        >
          <i className="text-white fas fa-check"></i>
        </button>
      </div>

      <div className="m-2">
        <ul className="">
          {dishesList &&
            dishesList.map((dish, index) => {
              return (
                <li
                  key={index}
                  className="flex m-2 items-center justify-center"
                >
                  <p className="mr-5">{dish}</p>
                  <i
                    onClick={deleteDish}
                    data-key={index}
                    className={
                      "ml-auto text-lg text-" +
                      color +
                      "-500 fas fa-trash-alt hover:text-" +
                      color +
                      "-400"
                    }
                  ></i>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Dish;
