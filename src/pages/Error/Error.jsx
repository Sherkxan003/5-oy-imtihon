import React from 'react';
import Erro from "../../../images/404.jpg"
import { useNavigate } from 'react-router-dom';


function Error() {
    const navigate = useNavigate();
    return (
        <>
         <div className="container">
            <button className='bg-white py-[12px] px-[12px] mb-[10px] rounded' onClick={()=>navigate (-1)}><i className='bx bx-arrow-back'></i>Back</button>
            <img src={Erro} alt="Error" className='w-[1200px] h-[600px] mx-auto' />
         </div>   
        </>
    );
}

export default Error;