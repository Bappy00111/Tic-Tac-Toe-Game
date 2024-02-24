import React from "react";

const Squre = () => {
  return (
    <>
      <button className="bg-white border border-gray-200 h-12 w-12 mt-1 mr-1 leading-9 text-lg">
        X
      </button>
    </>
  );
};

const Bord = () => {
  return (
    <>
      <div>
        <Squre></Squre>
        <Squre></Squre>
        <Squre></Squre>
      </div>
      <div>
        <Squre></Squre>
        <Squre></Squre>
        <Squre></Squre>
      </div>
      <div>
        <Squre></Squre>
        <Squre></Squre>
        <Squre></Squre>
      </div>
    </>
  );
};

export default Bord;
