'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from 'next-themes';



function Header() {
  const [RespoMenu, setRespoMenu] = useState<boolean>(false)
  const router: any = useRouter();
  const menuopen = () => {
    setRespoMenu((res: Boolean) => !res)
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const strokeColor = resolvedTheme === 'dark' ? '#CCCCCC' : '#223E99';
  const Toggle = resolvedTheme === 'dark' ? '#F7F7F7' : '#1A1A1A';


  // Ensures the component is mounted before checking theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; 

  return (
      <div className="fixed top-0 left-0 w-full bg-white dark:bg-[#1A1A1A] dark:text-white z-50">
        <div className="mx-auto max-w-[1440px] ">
          <div className="flex justify-between px-[32px] py-[32px]">
            <nav>
              <ul className="flex flex-wrap text-xl">
                <li className="mr-6">
                <Link href="/">
                  {resolvedTheme === 'dark' ? (
                    <img
                      src={`${router.basePath}/assets/images/Header/Darktheme/DarkthemeLogo.png`}
                      className='w-auto h-[32px] max-sm:h-[24px]'
                      alt="Dark theme logo"
                    />
                  ) : (
                    <img
                      src={`${router.basePath}/assets/images/Header/Lighttheme/Logo.png`}
                      className='w-auto h-[32px] max-sm:h-[24px]'
                      alt="Light theme logo"
                    />
                  )}
                </Link>
                </li>
              </ul>
            </nav>

            <div className="flex">
              <div className="flex flex-wrap text-base items-center max-lg:hidden">
                <div className="mr-6">
                  <Link
                    href="/services/"
                    className="border-none text-[#333333] dark:text-white  hover:text-[#1744FC]"
                  >
                    Services
                  </Link>
                </div>

                <div className="mr-6">
                  <Link
                    href="/industries/"
                    className="border-none text-[#333333] dark:text-white  hover:text-[#1744FC]"
                  >
                    Industries
                  </Link>
                </div>


                <div className="relative mr-6">
                  {/* Toggle Button */}
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={toggleMenu}
                  >
                    <Link 
                      href="#"
                      className="border-none text-[#333333] dark:text-white  hover:text-[#1744FC]"
                    >
                      Company
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className={`ml-2 transition-transform duration-300 text-[#333333] dark:text-white hover:text-[#1744FC] ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M9.14258 0.855469L5.14258 5.14118L1.14258 0.855468" stroke={strokeColor} />
                    </svg>
                  </div>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10 p-4 rounded-lg">
                      <Link className="text-[#333333]" href={`/${router.basePath}/aboutus`}>
                        <div className="py-2 px-3  hover:text-[#1744FC]">About Us</div>
                      </Link>
                      <Link className="text-[#333333]" href={`/${router.basePath}/careers`}>
                        <div className="py-2 px-3  hover:text-[#1744FC]">Careers</div>
                      </Link>
                    </div>
                  )}
                </div>


                <div className="mr-6">
                  <Link
                    href="/blog/"
                    className="border-none text-[#333333] dark:text-white  hover:text-[#1744FC]"
                  >
                    Blogs
                  </Link>
                </div>

                <div className="mr-6">
                  <Link
                    href="/contactus/"
                    className="border-none text-white rounded-full px-[16px] py-[8px] bg-black dark:bg-white dark:text-[#1A1A1A] "
                  >
                    Contact Us
                  </Link>
                </div>

              </div>
              <div className="flex">
                <div className="mr-6 theme-transition">
                  <ThemeSwitch />
                </div>
                <div className="justify-center items-center pr-1 sm:pr-5 flex lg:hidden " onClick={menuopen}>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H17M1 7H17M10 13H17" stroke={Toggle} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          RespoMenu && <Respmenu router={router} menuclose={menuopen} />
        }

      </div>
  );
}

const Respmenu = ({ router, menuclose }: { router: string | undefined | string[], menuclose: any }) => {
  const [ShowResMenu, setShowResMenu] = useState<boolean>(false)
  const menuopen = () => {
    setShowResMenu((res: Boolean) => !res)
  }
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === 'dark' ? '#CCCCCC' : '#223E99';
  return (
    <div className="h-full w-full fixed top-0 left-0 overflow-hidden p-[32px] items-center block bg-white dark:bg-black dark:text-white transition z-10">
      <div className="float-right">
        <svg width="24" onClick={menuclose} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.34375 17.6572L17.6575 6.34352"  stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.6582 17.6572L6.34449 6.34352"  stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>


      <div className="mt-14">
        <div className="text-left cursor-pointer py-3 pr-5 top-[88px] border-b-[1px]">
          <Link onClick={menuclose} className="text-[#1A1A1A] dark:text-white " href={`/${router}/activity`}>
            Services
          </Link>
        </div>
        <div className="text-left  cursor-pointer py-3 pr-5 border-b-[1px]">
          <Link onClick={menuclose} className="text-[#1A1A1A] dark:text-white " href={`/${router}/activity`}>
            Industries
          </Link>
        </div>
        <div className="text-[#1A1A1A] dark:text-white text-left cursor-pointer border-b-[1px]"
          onClick={menuopen}>
          <div className="pr-5 py-3 flex justify-between items-center">
            Company
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"
              className={`transition-transform ${ShowResMenu ? "rotate-180" : "rotate-0"}`}>
              <path d="M9.14258 0.855469L5.14258 5.14118L1.14258 0.855468" stroke={strokeColor} />
            </svg>
          </div>
          <div className={`font-normal transition-opacity px-6 ${ShowResMenu ? "opacity-100 block" : "opacity-0 hidden"}`}>
            <Link onClick={menuclose} className="text-[#1A1A1A] dark:text-white " href={`/${router}/about`}>
              <div className="py-3 pr-5">About Us</div>
            </Link>
            <Link onClick={menuclose} className="text-[#1A1A1A] dark:text-white " href={`/${router}/careers`}>
              <div className="py-3 pr-5">Careers</div>
            </Link>
          </div>
        </div>
        <div className="text-left  cursor-pointer py-3 pr-5 border-b-[1px]">
          <Link onClick={menuclose} className="text-[#1A1A1A] dark:text-white" href={`/${router}/activity`}>
            Blogs
          </Link>
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/sign-up/"
            className="border-none text-white dark:text-black rounded-full px-[16px] py-[16px] bg-black dark:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
