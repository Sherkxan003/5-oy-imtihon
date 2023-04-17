import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../images/QPICK.svg";
import { Link } from "react-router-dom";
import { SavatContext } from "../../context/savatContext";

function Header() {
  const { savat, setFilter, likes } = useContext(SavatContext)
  const [data, setData] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  data?.map((item) => {
    if (!categorys.includes(item.category)) {
      categorys.push(item.category);
    }
  });

  return (
    <>
      { }
      <header className="py-[15px]">
        <div className="container">
          <nav className="nav flex justify-between items-center">
            <div className="nav__left flex items-center gap-[75px]">
              <div className="nav__logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="nav__sort">
                <select
                  className="p-2.5 text-black bg-[#eaeaea] shadow-sm outline-none "
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Category
                  </option>
                  {categorys.map((item) => {
                    return <option value={item} key={item}>{item} </option>;
                  })}
                </select>
              </div>
            </div>
            <div className="nav__right flex gap-[36px]">
              <div className="nav__right--icon relative  p-2">
                <Link to="/fovourites">
                  <i className="bx bx-heart text-3xl cursor-pointer text-[#838383]"></i>
                </Link>
                <span className=" w-[18px] h-[18px]  bg-[#FFA542] rounded-full top-2 right-[3px] absolute text-white flex items-center justify-center">{likes.length}</span>
                {console.log(likes.length)}
              </div>
              <div className="nav__right--icon relative  p-2">
                <Link to={"/savat"}>
                  <i className="bx bx-cart text-3xl cursor-pointer text-[#838383]"></i>
                </Link>
                <span className=" w-[18px] h-[18px]  bg-[#FFA542] rounded-full top-2 right-[3px] absolute text-white flex items-center justify-center">{savat.length}</span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
