import React, { useState } from "react";

function Starter() {
  const [inputText, setInputText] = useState("");
  const [startersList, setStartersList] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const addStarter = (e) => {
    e.preventDefault();
    setStartersList([...startersList, { text: inputText }]);
    setInputText("");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-green-500 m-2">Entrées</h1>
      <form>
        <input
          onChange={inputHandler}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          type="text"
          value={inputText}
          placeholder="Ajouter une entrée"
        />
        <button
          className="bg-green-500 rounded ml-2 w-8 h-8"
          onClick={addStarter}
        >
          <i className="text-white fas fa-check"></i>
        </button>
      </form>

      <div className="">
        <ul className="">
          {startersList.map((starter) => {
            return <li key={starter.text}>{starter.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Starter;
