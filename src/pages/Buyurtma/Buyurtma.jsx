import React from 'react';
import cupon from "../../../images/coupon.png"

const Buyurtma = () => {
    return (
        <div className='container mx-auto px-20'   >
            <form action="#">
                <div className="flex justify-between">
                    <div className="w-[450px] h-[550px]  bg-white px-4 pb-8 pt-3 rounded-3xl">
                        <h3 className="mb-2 ml-3 font-bold">Доставка курьером</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2549630101857!2d69.242632175793!3d41.32506887130788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2zTmFqb3QgVGHigJlsaW0!5e0!3m2!1suz!2s!4v1681539031045!5m2!1suz!2s"
                            className="w-full rounded-xl border-spacing-5"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="flex w-1/2 justify-around mt-2 items-center"> <i class='bx bxs-map text-2xl'></i><h3 className='font-normal text-xl'>Адрес доставки</h3></div>
                        <label htmlFor="gorod" className='mt-3 relative'>
                            <input type="text" id="gorod" placeholder='Город' className='rounded-[15px] bg-[#D6D6D6] w-full px-3 h-[45px] focus:right-4 shadow mt-3' />
                            <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                        </label>
                        <label htmlFor="gorod" className='mt-3 relative'>
                            <input type="text" id="gorod" placeholder='Улица / Район' className='rounded-[15px] bg-[#D6D6D6] w-full px-3 py-2 focus:right-4 shadow mt-3 h-[45px]' />
                            <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                        </label>
                        <label htmlFor="gorod" className='mt-3 relative'>
                            <input type="text" id="gorod" placeholder='Улица / Район' className='rounded-[15px] bg-[#D6D6D6] w-full px-3 py-2 focus:right-4 shadow mt-3 h-[45px]' />
                            <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                        </label>
                        <label htmlFor="gorod" className='mt-3 relative mr-10'>
                            <input type="text" id="gorod" placeholder='Дом' className='rounded-[15px] bg-[#D6D6D6] w-[45%] px-3 py-2 focus:right-4 shadow mt-3 h-[45px]' />
                            <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                        </label>
                        <label htmlFor="gorod" className='mt-3 relative'>
                            <input type="text" id="gorod" placeholder='Подъезд' className='rounded-[15px] bg-[#D6D6D6] w-[45%]  px-3 py-2 focus:right-4 shadow mt-3 h-[45px]' />
                            <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                        </label>
                        <label htmlFor="gorod" className='mt-3 relative'>
                            <input type="text" id="gorod" placeholder='Квартира' className='rounded-[15px] bg-[#D6D6D6] w-[45%] px-3 py-2 focus:right-4 shadow mt-3 h-[45px]' />
                            <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                        </label>

                    </div>
                    <div className="">

                        <div className="w-[450px]  h-[160px] bg-white rounded-3xl py-2 px-4 mb-5">
                            <h1 className='font-bold text-xl'>Ваш заказ</h1>
                            <ul className='block w-full px-5'>
                                <li className='flex justify-between w-full mt-2'> <h2 className='font-[600]'>Наушники Apple BYZ S852I</h2> <h2>₸  2927</h2></li>
                                <li className='flex justify-between w-full mt-2'> <h2 className='font-[600]'>Доставка</h2> <h2>₸  2927</h2></li>
                                <li className='flex justify-between w-full mt-2'> <h2 className='font-[600]'>К оплате</h2> <h2>₸  2927</h2></li>
                            </ul>
                        </div>
                        <div className="w-[450px]  h-[160px] bg-white rounded-3xl py-2 px-4">
                            <h1 className='font-bold text-2xl'>Способ оплаты</h1>
                            <ul>
                                <li className='flex justify-between w-1/2 items-center mt-2 '><i class='bx bxl-visa text-3xl' ></i> <h3 className='text-xl'>Счет на kaspi.kz</h3></li>
                                <li className='flex justify-between w-1/2 items-center mt-2 '><img src={cupon} alt="cupon" /> <h3 className='text-xl'>Есть промокод?</h3></li>
                            </ul>

                        </div>
                        <div className="w-[450px]  h-[140px] bg-white rounded-3xl py-2 px-4 mt-6">
                            <h1 className='font-bold text-2xl'>Номер получателя</h1>
                            <label htmlFor="gorod" className='mt-3 relative'>
                                <input type="text" id="gorod" placeholder='+998  _____  ___ ___' className='rounded-[15px] bg-[#D6D6D6] w-full px-3  focus:right-4 shadow mt-3 h-[55px]' />
                                <i class='bx bxs-pencil absolute top-1 right-3 ' ></i>
                            </label>
                        </div>
                        <button type='submit' className=" bg-[#101010] w-full  h-[65px] flex items-center justify-center  mt-[20px] rounded-3xl text-white" >Закончить оформление</button>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default Buyurtma;