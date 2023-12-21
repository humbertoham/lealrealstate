'use client';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition  } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";


import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration





function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const {t} = useTranslation()
  return (
    <Disclosure as="nav" className="bg-black py-5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl SSpx-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}                                                                                                                                                                                                                                                        
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 nav focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href='/'>
                  <img
                    className="logo "
                    src="./images/logo.png"
                    alt="Your Company"
                  /></a>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    
                      <a
                        
                        href= '/#acerca'
                        className= 'nav rounded-md px-3 py-2 text-sm font-medium mt-7'
                        
                        
                      >
                        {t('about')}
                      </a>
                      <a
                        
                        href= '/#propiedades'
                        className= 'nav rounded-md px-3 py-2 text-sm font-medium mt-7'
                        
                        
                      >
                        {t('props')}
                      </a>
                      <a
                        
                        href= '#contacto'
                        className= 'nav rounded-md px-3 py-2 text-sm font-medium mt-7'
                        
                        
                      >
                        {t('con')}
                      </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                <div className='hidden xl:ml-6 xl:block text-white'>
                  <EnvelopeIcon className='icon'/> 
                  <h1>Email: eduardoleggs.leal@gmail.com</h1>
                  
                </div>
                <div className='hidden xl:ml-6 xl:block text-white'>
                <PhoneIcon className='icon'/>
                  <h1>{t('num')}:+52 624 117 7448</h1>
                  </div>
                  <div className='hidden sm:ml-6 sm:block'>
                  <a href='https://www.facebook.com/profile.php?id=61553154526911' target="_blank"> <FaFacebook className = 'iconfa'/> </a>
                  </div>
                 
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              
                <Disclosure.Button
                  
                  as="a"
                  href="/#acerca"
                  className='nav block rounded-md px-3 py-2 text-base font-medium'
                
                
                >
                  {t('about')}
                </Disclosure.Button>
                <Disclosure.Button
                  
                  as="a"
                  href="/#propiedades"
                  className='nav block rounded-md px-3 py-2 text-base font-medium'
                
                
                >
                  {t('props')}
                </Disclosure.Button>
                <Disclosure.Button
                  
                  as="a"
                  href="#contacto"
                  className='nav block rounded-md px-3 py-2 text-base font-medium'
                
                
                >
                  {t('con')}
                </Disclosure.Button>
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
