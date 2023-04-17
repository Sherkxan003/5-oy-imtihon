import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../../ui/Card";
import { SavatContext } from "../../context/savatContext";


function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {savat,setSavat} = useContext(SavatContext)


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));

  }, []);

  return (
    <>
      <div className="flex  justify-center items-start">
        <Card item={data} dectiption={data.description} />
        <div className="gap-5">
          <button
            className="bg-sky-500 py-[12px] px-[12px]  ml-12 mt-[20px] rounded"
            onClick={() => navigate(-1)}
          >
            <i className="bx bx-arrow-back"></i>Back
          </button>
          <Link to={"/savat"} className=" bg-[#101010]  w-[260px] h-[65px] ml-12 mt-[20px]  flex items-center justify-center rounded text-white"
            onClick={() => {
              if (!savat.includes(data)) {
                setSavat(
                  [data, ...savat]
                )
              }
            }}>
            Купить!
          </Link>
          <button className=" bg-[#101010] w-[260px] h-[65px] flex items-center justify-center ml-12 mt-[20px] rounded text-white" onClick={() => {
            if (!savat.includes(data)) {
              setSavat(
                [data, ...savat]
              )
            }
          }} >
            <i className="bx bx-cart text-3xl cursor-pointer text-white mr-4 "></i>
            Добавить в корзину
          </button>
        </div>
      </div>
      {console.log(savat)}
    </>

  );
}

export default SingleProduct;
