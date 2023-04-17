import React, { useContext } from "react";
import savatt from "../../../images/savat.png";
import { SavatContext } from "../../context/savatContext";
import CardSavat from "../../ui/CardSavat";

const Savat = () => {
  const {savat} = useContext(SavatContext)

  return (
    <>
      {savat.length > 0 ? <CardSavat savat={savat}/>: <div className="container mx-auto ">
        <img src={savatt} alt="Error" className="mx-auto" />

        <div className="card-body mx-auto  ml-[34%] mt-4">
          <h2 className="text-[#101010] font-[500] text-3xl ml-20">
            Корзина пуста{" "}
          </h2>
          <small className="font-[600] text-xl text-[#838383]">
            Но это никогда не поздно исправить :)
          </small>
        </div>
        <button className="w-[540px] h-[65px] text-white bg-[#101010]  mx-auto flex justify-center items-center font-[600] text-xl rounded-3xl shadow-sm mt-[30px]">
          В каталог товаров
        </button>

      </div>}
     
    </>
  );
};

export default Savat;
