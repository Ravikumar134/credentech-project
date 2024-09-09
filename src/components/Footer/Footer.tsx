'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useTheme } from 'next-themes';

const Footer = () => {
  const router: any = useRouter();

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  // Ensures the component is mounted before checking theme
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer className="pt-8 text-sm bg-[#F7F7F7] dark:bg-[#1A1A1A]">
      <div className="screen-size">
        <div className="flex justify-between px-[32px] pt-[32px] max-sm:flex-col">

          <div className='flex flex-col gap-[138px] max-sm:gap-10'>
            <div className='flex flex-col'>
              <Link
                href="/"
                className=' border-none'
              >
                {resolvedTheme === 'dark' ? (
                  <img
                    src={`${router.basePath}/assets/images/Footer/Darktheme/WhiteLogo.png`}
                    className='w-auto h-[32px] max-sm:h-[24px]'
                    alt="Dark theme logo"
                  />
                ) : (
                  <img
                    src={`${router.basePath}/assets/images/Footer/Lighttheme/BlackLogo.png`}
                    className='w-auto h-[40px] max-sm:h-[24px]'
                    alt="Logo"
                  />
                )}
              </Link>
            </div>

            <div className='flex flex-col items-start'>
              <div className='text-base left-6 font-normal underline mb-8 dark:text-white'>
                CONTACT INFO
              </div>

              <div className='flex flex-col gap-4'>

                <div className='flex items-center gap-2'>
                  {resolvedTheme === 'dark' ? (
                    <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.2944 6.20371C11.0443 6.32939 11.7256 6.68359 12.2694 7.22632C12.8133 7.76905 13.1653 8.44889 13.2941 9.19728M10.4089 3.75C11.7428 3.97566 12.9592 4.60694 13.9267 5.56957C14.8942 6.53505 15.5239 7.74905 15.75 9.08016M14.7081 14.376C14.7081 14.376 13.9839 15.0873 13.8065 15.2958C13.5174 15.6043 13.1768 15.75 12.7302 15.75C12.6873 15.75 12.6415 15.75 12.5986 15.7471C11.7485 15.6929 10.9585 15.3615 10.366 15.0787C8.7459 14.2961 7.32333 13.1849 6.1412 11.7767C5.16515 10.6027 4.51254 9.5172 4.08034 8.35176C3.81414 7.6405 3.71682 7.08635 3.75976 6.56361C3.78838 6.22941 3.91718 5.95233 4.15476 5.71524L5.1308 4.74119C5.27106 4.60979 5.4199 4.53838 5.56588 4.53838C5.7462 4.53838 5.89218 4.64693 5.98377 4.73833C5.98663 4.74119 5.9895 4.74405 5.99236 4.7469C6.16696 4.90972 6.33297 5.07825 6.50757 5.25821C6.59631 5.34962 6.6879 5.44102 6.77949 5.53529L7.56091 6.3151C7.86431 6.61789 7.86431 6.89782 7.56091 7.20061C7.4779 7.28344 7.39775 7.36628 7.31475 7.44626C7.07431 7.69192 7.26319 7.50343 7.01417 7.72623C7.00844 7.73194 7.00272 7.7348 6.99985 7.74051C6.7537 7.98617 6.79949 8.22611 6.85101 8.38893C6.85388 8.3975 6.85674 8.40607 6.8596 8.41464C7.06283 8.90595 7.34906 9.3687 7.78413 9.91999L7.78699 9.92285C8.57699 10.894 9.40992 11.651 10.3287 12.2309C10.4461 12.3051 10.5663 12.3651 10.6808 12.4223C10.7838 12.4737 10.8811 12.5222 10.9642 12.5736C10.9756 12.5794 10.9871 12.5879 10.9985 12.5936C11.0958 12.6422 11.1874 12.6651 11.2819 12.6651C11.5194 12.6651 11.6683 12.5165 11.7169 12.468L12.278 11.9081C12.3753 11.8109 12.5299 11.6938 12.7102 11.6938C12.8877 11.6938 13.0336 11.8052 13.1224 11.9023C13.1252 11.9052 13.1252 11.9052 13.1281 11.9081L14.7052 13.482C15.0001 13.7733 14.7081 14.376 14.7081 14.376Z" stroke="#CDCDCD" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4711 9.92593C17.671 10.127 18.7609 10.6937 19.6311 11.5621C20.5012 12.4305 21.0645 13.5182 21.2706 14.7156M16.6543 6C18.7884 6.36106 20.7348 7.3711 22.2827 8.91131C23.8307 10.4561 24.8382 12.3985 25.2 14.5283M23.533 23.0017C23.533 23.0017 22.3743 24.1397 22.0903 24.4733C21.6278 24.9669 21.0828 25.2 20.3684 25.2C20.2997 25.2 20.2264 25.2 20.1577 25.1954C18.7975 25.1086 17.5336 24.5784 16.5856 24.126C13.9934 22.8737 11.7173 21.0958 9.82592 18.8427C8.26424 16.9642 7.22007 15.2275 6.52854 13.3628C6.10263 12.2248 5.94692 11.3382 6.01561 10.5018C6.06141 9.96705 6.26749 9.52373 6.64761 9.14439L8.20929 7.58591C8.43369 7.37567 8.67184 7.26141 8.9054 7.26141C9.19392 7.26141 9.42749 7.43508 9.57404 7.58133C9.57862 7.58591 9.5832 7.59048 9.58778 7.59505C9.86714 7.85556 10.1328 8.12521 10.4121 8.41314C10.5541 8.55939 10.7006 8.70564 10.8472 8.85646L12.0974 10.1042C12.5829 10.5886 12.5829 11.0365 12.0974 11.521C11.9646 11.6535 11.8364 11.786 11.7036 11.914C11.3189 12.3071 11.6211 12.0055 11.2227 12.362C11.2135 12.3711 11.2043 12.3757 11.1998 12.3848C10.8059 12.7779 10.8792 13.1618 10.9616 13.4223C10.9662 13.436 10.9708 13.4497 10.9754 13.4634C11.3005 14.2495 11.7585 14.9899 12.4546 15.872L12.4592 15.8766C13.7232 17.4305 15.0559 18.6416 16.526 19.5694C16.7137 19.6882 16.9061 19.7842 17.0893 19.8756C17.2541 19.9579 17.4098 20.0356 17.5426 20.1178C17.561 20.127 17.5793 20.1407 17.5976 20.1498C17.7533 20.2275 17.8999 20.2641 18.051 20.2641C18.4311 20.2641 18.6693 20.0264 18.7471 19.9487L19.6448 19.0529C19.8005 18.8975 20.0478 18.7101 20.3363 18.7101C20.6203 18.7101 20.8538 18.8884 20.9958 19.0437C21.0004 19.0483 21.0004 19.0483 21.005 19.0529L23.5284 21.5711C24.0001 22.0373 23.533 23.0017 23.533 23.0017Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  )
                  }
                  <div className='text-base font-normal text-[#333333] dark:text-white'>Call us now</div>
                </div>

                <div className='flex items-center gap-2'>
                  {resolvedTheme === 'dark' ? (
                    <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.42969 6.71875L9.59977 9.71266C9.84056 9.88553 10.1594 9.88553 10.4002 9.71266L14.5703 6.71875M5.78125 14.375H14.2188C14.9954 14.375 15.625 13.7221 15.625 12.9167V7.08333C15.625 6.27792 14.9954 5.625 14.2188 5.625H5.78125C5.0046 5.625 4.375 6.27792 4.375 7.08333V12.9167C4.375 13.7221 5.0046 14.375 5.78125 14.375Z" stroke="#CDCDCD" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.6875 10.75L15.3596 15.5403C15.7449 15.8168 16.2551 15.8168 16.6404 15.5403L23.3125 10.75M9.25 23H22.75C23.9926 23 25 21.9553 25 20.6667V11.3333C25 10.0447 23.9926 9 22.75 9H9.25C8.00736 9 7 10.0447 7 11.3333V20.6667C7 21.9553 8.00736 23 9.25 23Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  )
                  }
                  <div className='text-base font-normal text-[#333333] dark:text-white'>info@credentech.com</div>
                </div>
              </div>
            </div>
          </div>


          <div className='flex flex-col gap-8 max-sm:gap-6 max-sm:mt-6'>
            <div className='text-base left-6 font-normal underline dark:text-white'>
              QUICK LINKS
            </div>

            <div className='flex flex-col gap-6'>
              {/* Quick Links Items */}
              {['Services', 'Industries', 'Blogs', 'About Us', 'Career', 'Privacy Policy'].map((link) => (
                <div key={link} className="text-base font-normal">
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, '')}/`} className='text-[#333333] dark:text-white'>{link}</Link>
                </div>
              ))}
            </div>

            <div className='flex flex-row gap-6 bottom-0 border-none'>
              {/* Social Icons */}
              {['linkedin', 'instagram', 'facebook', 'twitter', 'youtube'].map((icon) => (
                <Link href="/" key={icon} className=' border-none'>
                  {resolvedTheme === 'dark' ? (
                    <Image
                      src={`${router.basePath}/assets/images/Footer/Darktheme/${icon}.svg`}
                      alt={icon}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src={`${router.basePath}/assets/images/Footer/Lighttheme/${icon}.svg`}
                      alt={icon}
                      width={24}
                      height={24}
                    />
                  )
                  }
                </Link>
              ))}
            </div>
          </div>

        </div>
        <div className='mx-auto text-xs font-normal text-center leading-[18px] pt-10 pb-20 max-sm:pb-9 dark:text-white'>
          @Copyright Credentech 2024. All Rights Reserved.
        </div>
      </div>
    </footer >
  )
}

export default Footer
