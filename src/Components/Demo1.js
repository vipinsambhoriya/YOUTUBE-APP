import React, { useState } from "react";

const Demo1 = () => {
  let x = 0;

  const [y, setY] = useState(0);
  return (
    <div className="m-4 p-2 w-96 h-96 bg-slate-200 border border-black ">
      <div>
        <button
          className="bg-green-200 mx-4 p-2"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          increas x
        </button>
        <span className="font-bold text-xl">let ={x}</span>
      </div>

      <div className="mt-4">
        <button
          className="bg-green-200 ml-4 p-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          increas y
        </button>

        <span className="font-bold text-xl m-2">state ={y}</span>
        <button
          className="bg-green-200 ml-4 p-2"
          onClick={() => {
            setY(y - 1);
          }}
        >
          decreas y
        </button>
      </div>
    </div>
  );
};

export default Demo1;
