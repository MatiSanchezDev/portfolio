import Image from "next/image";
import React from "react";
import Redux from "./icons/IconRedux";
import TailwindCSS from "./icons/IconTailwind";
import Nextjs from "./icons/IconNext";
import TypeScript from "./icons/IconTypescript";
import Nodejs from "./icons/IconNode";
import Expressjs from "./icons/IconExpress";
import PostgreSQL from "./icons/IconPosgree";

const Card = () => {
  return (
    <div className="relative mr-3 flex items-center justify-center">
      <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 ">
        <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-lime-100 p-1">
            <Nextjs className="w-9 h-9" />
          </span>
        </button>
        <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-lime-100 p-1">
            <TailwindCSS className="w-9 h-9" />
          </span>
        </button>
        <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-lime-100 p-2 flex justify-center items-center">
            <Redux className="w-9 h-9" />
          </span>
        </button>
        <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="flex justify-center items-center bg-lime-100 w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] p-2">
            <TypeScript className="w-8 h-8" />
          </span>
        </button>
        <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="flex justify-center items-center bg-lime-100 w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] e p-2">
            <PostgreSQL className="w-9 h-9" />
          </span>
        </button>
        <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="flex justify-center items-center bg-lime-100 w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] p-2">
            <Expressjs className="w-9 h-9 text-black" />
          </span>
        </button>
        <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 animate-wiggle animate-infinite animate-ease-in">
          <span className="flex justify-center items-center bg-lime-100 w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] p-2">
            <Nodejs className="w-9 h-9" />
          </span>
        </button>
        <button className="profile_item w-[190px] h-[190px] md:w-[200px] md:h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
          <div className="w-full bg-white h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500 overflow-hidden">
            <span className="w-48 h-48 inline-block ">
              <Image
                src={"/perfil.jpg"}
                alt="Perfil"
                width={1000}
                height={1000}
                className="w-full h-full object-cover sepia-75 overflow-hidden"
                priority
              />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
