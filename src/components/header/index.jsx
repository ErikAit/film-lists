import React from 'react'

export default function Header() {
  return (
    <>
      <header className='header w-full h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/947fcbf2-f0d8-416b-833c-ad162a672a31/AM-ru-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg)] bg-cover'>

        <div className="header-content text-white flex items-center justify-between px-[13px] font-[600]">
          <div className="logo z-30 ml-4">
            <img
              className='w-[188px] h-[100px]'
              src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="header-logo" />
          </div>

          <div className="second-part flex items-center gap-3 mr-[42px] z-10">
            <div>
              <button className='py-[6px] px-[28px] border-white border-[1px] rounded flex items-center justify-between relative'>
                <div className='absolute left-[12px]' role="img" aria-hidden="true" class="default-ltr-cache-iyxs8w e1vkmu653"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg></div>
                <span className='ml-2'>Русский</span>
                <div className='ml-2' aria-hidden="true" class="default-ltr-cache-emv211 ea3diy33"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CaretDownSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg></div>
              </button>
            </div>

            <div>
              <button className='px-[24px] py-[6px] bg-red-600 rounded'>Войти</button>
            </div>
          </div>
        </div>
        <div className="overlay w-full h-screen absolute top-0 left-0 bg-black opacity-[0.6]"></div>
      </header>
    </>
  )
}
