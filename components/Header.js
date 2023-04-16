
import Link from "next/link";
import React, {useState } from 'react';


import { Menu } from '@headlessui/react';
import DropdownLink from './dropdownlink';

const Header = () => {



  return (
    <div className="w-full font-titleFont sticky top-0 bg-white z-50 px-4 pt-4">
     
       
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">      
      
              <div className='sm:hidden'>
                      <Link href='https://localflyer.online'>
                        <div className='mobile: text-sm text-black font-bold  laptop:text-lg text-black font-bold'>Localflyer.online</div>
                      </Link>
              </div>
          
         
        <div >
        <ul className="mobile:hidden laptop:inline-flex gap-8 uppercase text-sm font-semibold">
            <Link href='https://localflyer.online'>
            <li className="headerLi">Home</li>
            </Link>
            <Link href='https://localflyer-blog.vercel.app'>
            <li className="headerLi">Beauty News</li>
            </Link>
            <Link href='https://localflyer-youtubeapi.vercel.app' >
            <li className="headerLi">Beauty video</li>
            </Link>
            <Link href='https://localflyer-landingpage.vercel.app'>
            <li className="headerLi">Landing Page</li>
            </Link>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
       <div className="laptop:hidden">
       <Menu as="div" className="relative inline-block z-10 ml-12">
                            <Menu.Button className="text-black font-bold text-md">       
                            {/* { session.user.name } */}
                            Menu
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg font-bold pl-2 text-blue-500">
                              
                              <Menu.Item>
                              <DropdownLink
                                  className="dropdown-link"
                                  href="https://localflyer-blog.vercel.app"
                                >
                                  Beauty News
                                </DropdownLink>
                              </Menu.Item>
                              <Menu.Item>
                                <DropdownLink
                                  className="dropdown-link"
                                  href="https://localflyer-youtubeapi.vercel.app"
                                >
                                  Beauty video
                                </DropdownLink>
                              </Menu.Item>
                              <Menu.Item> 
                                <DropdownLink
                                  className="dropdown-link"
                                  href="https://localflyer-landingpage.vercel.app"
                                >
                                  Landing Page
                                </DropdownLink>
                              </Menu.Item>
                             
                            
                              <Menu.Item>
                              <DropdownLink
                                  className="dropdown-link"
                                  href="#"
                                >
                                 contact
                                 </DropdownLink>
                              </Menu.Item>
                              
                            </Menu.Items>
                          </Menu>
       </div>
     
      </div>       
    </div>
  );
};

export default Header;