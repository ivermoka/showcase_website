import React from "react";

const Nav = () => {
  return (
    <div className=" h-[10vh] w-full flex">
      <div className=" w-[50%] pl-32 py-5 text-2xl text-green-700 font-bold">
        World Peas
      </div>
      <div className=" w-[50%] flex justify-evenly items-center text-lg text-black">
        <a href="">Shop</a>
        <a href="">Namestand</a>
        <a href="">Who we are</a>
        <button className=" px-4 py-1 rounded-lg bg-green-800 text-white">
          Basket
        </button>
      </div>
    </div>
  );
};

export default Nav;
