import React from "react";

function Dessert() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-indigo-500 m-2">Dessert</h1>
      <form>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
          type="text"
          placeholder="Ajouter un dessert"
        />
        <button className="bg-indigo-500 rounded ml-2 w-8 h-8"><i className="text-white fas fa-check"></i></button>
      </form>
    </div>
  );
}

export default Dessert;
