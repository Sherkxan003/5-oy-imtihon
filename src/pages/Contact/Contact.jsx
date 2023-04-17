import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto flex items-start justify-between mb-[100px]">
        <div className="w-[760px] h-[550px]  bg-white px-4 pb-8 pt-3 rounded-3xl">
          <h3 className="mb-2 ml-3 text-xl font-bold">Наш офис</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2549630101857!2d69.242632175793!3d41.32506887130788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2zTmFqb3QgVGHigJlsaW0!5e0!3m2!1suz!2s!4v1681539031045!5m2!1suz!2s"
            className="w-[720px] h-[460px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" ">
          <div className="w-[100px] h-[100px] p-[30px] bg-white shadow  rounded-3xl">
            <i className="bx bxl-vk text-[40px]"></i>
          </div>
          <div className="w-[100px] h-[100px] p-[30px] bg-white shadow mt-3 rounded-3xl">
            <i className="bx bxl-instagram text-[40px]"></i>
          </div>
          <div className="w-[100px] h-[100px] p-[30px] bg-white shadow mt-3 rounded-3xl">
            <i className="bx bxl-telegram text-[40px]"></i>
          </div>
          <div className="w-[100px] h-[100px] p-[30px] bg-white shadow mt-3 rounded-3xl">
            <i className="bx bxl-whatsapp text-[40px]"></i>
          </div>
        </div>

        <button
          className="bg-sky-500 py-[12px] px-[12px]  ml-12 mt-[20px] rounded"
          onClick={() => navigate(-1)}
        >
          <i className="bx bx-arrow-back"></i>Back
        </button>
      </div>
      <div className="flex  container mx-auto pt-16 ">
  
        <i className="bx bxs-phone text-[40px] text-black"></i>
        <h2 className="text-black ml-6 text-2xl font-bold">
          +998 93 404 41 42
        </h2>
      </div>
    </>
  );
};

export default Contact;
