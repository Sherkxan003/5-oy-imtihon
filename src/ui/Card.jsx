import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SavatContext } from "../context/savatContext";


function Card({ item, dectiption, }) {
  const {likes,setLikes}=useContext(SavatContext)

  return (
    <>
      <div className=" w-[350px] bg-white min-h-[407px] rounded-[30px] shadow-lg">
        <div className="card-icon ">
          <i
            className="bx bx-heart text-2xl cursor-pointer text-[#838383] pt-[15px] pl-[22px]"
            onClick={() => {
              if (!likes.includes(item)) {
               setLikes(
                [item,...likes]
               )
                console.log(likes)
              }else{
                console.log("qowilgan");
              }
             
            }}
          ></i>
        </div>

        <div className="card-img py-[25px] px-[65px]">
          <img src={item.image} alt="img" className="w-full h-[230px]" />
        </div>
        <div className="card-body flex justify-between px-[20px] ">
          <div className="card-info">
            <h1 className="font-semibold text-[15px]">{item.title}</h1>
          </div>
          <div className="card-price">
            <p className="text-[#FFA542] font-semibold">{item.price}$</p>
          </div>
        </div>
        <div className="px-[20px]">
          <p className="text-[#838383] pt-[26px]">{item.category}</p>
          <h4 className=" ">{dectiption}</h4>
        </div>
        <Link to={`/single/${item.id}`}>
          <button className="bg-blue-100 px-3 py-2 ml-[110px] my-5 rounded-2xl">
            more
          </button>
        </Link>
      </div>
    </>
  );
}

export default Card;
