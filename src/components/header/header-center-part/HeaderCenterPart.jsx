import React from 'react'

export default function HeaderCenterPart() {
  return (
    <div className='header-center-part flex justify-center items-center w-full h-screen'>
      <div className="content text-white font-[600] justify-center text-center">
        <h1 className='text-[46px]'>Фильмы, сериалы и многое другое без <br /> ограничений</h1>
        <p className='text-[18px] mt-[16px]'>Смотрите где угодно. Отменить подписку можно в любое время.</p>
        <h1 className='text-[23px] mt-[16px]'>Готовы начать просмотр? Введите адрес электронной почты или номер телефона, <br /> чтобы оформить или возобновить подписку.</h1>

        <div className="form mt-[20px] flex justify-center gap-3">
          <div className='relative'>
            <button style={{ color: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(255, 255, 255, 0.7)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              className='whitespace-nowrap overflow-hidden text-[23px] leading-[1.5] text-ellipsis py-[0.9rem] px-[1rem] rounded-[6px]'>
              Адрес эл. почты или номер моб...
            </button>
          </div>

          <div>
            <button
              className='whitespace-nowrap overflow-hidden text-[23px] w-[300px] leading-[1.5] text-ellipsis py-[0.9rem] px-[1rem] rounded-[6px] bg-red-600 flex justify-center items-center'>
              Начать смотреть
              <img className='w-[20px] h-[20px] ml-2' src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
