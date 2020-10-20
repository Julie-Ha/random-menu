import React from "react";

function RandomDish({ color, randomDish }) {

  

  // useEffect(() => {
  //   generateRandomDish();
  // }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <p className="text-3xl text-gray-600 mr-4">{randomDish}</p>
      <i
        // onClick={generateRandomDish}
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
