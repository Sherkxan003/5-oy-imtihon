import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SavatContext } from '../context/savatContext';
const CardSavat = ({ savat }) => {
   

    const [sum, setSum] = useState(0);

    return (

        <>
            <div className="container mx-auto">
                <div className="flex justify-between w-full">
                    <div className="">
                        {savat?.map(item => {
                            const [summ, setSumm] = useState(item.price)

                            return <div className="w-[655px] mt-5 bg-white rounded-3xl p-2">

                                <div className="flex items-center"><img src={item.image} alt={item.title} className='w-[150px]' />
                                    <h3 className='ml-10'>{item.title}</h3>
                                </div>
                                <div className="flex  m-5 w-[150px] justify-between items-center">
                                    <button className=' px-3 bg-yellow-400 rounded-full text-white font-normal text-3xl' onClick={() => {
                                        if (summ > 0) {

                                            setSumm(Math.floor(summ - item.price))

                                        }


                                    }}>-</button>
                                    <h3>{summ}</h3>
                                    <button className='px-3 bg-yellow-400 rounded-full  text-white font-normal text-3xl' onClick={() => {
                                        if (summ => 0) {
                                            setSumm(Math.ceil(summ + item.price))


                                        }
                                    }}>+</button>
                                </div>

                            </div>

                        })}
                    </div>
                    <Link to={"/buyurtma"} className="w-[540px] h-[65px] text-white bg-[#101010]  mx-auto flex justify-center items-center font-[600] text-xl rounded-3xl shadow-sm mt-[30px]">
                        Перейти к оформлению
                    </Link>
                </div>
            </div>


        </>
    );
};

export default CardSavat;