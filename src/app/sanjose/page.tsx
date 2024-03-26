"use client"

import ButtonR from '@/components/buttonr'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


import { useTranslation } from 'react-i18next';
import '../i18n'; // Import the i18n configuration


export default function Sanjose() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar/>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <h1 className="text-3xl lg:text-6xl font-bold leading-9 text-black pb-4">San Jose</h1>
                    <p className="font-normal text-base leading-6 text-gray-700">{t('sanjose')} </p>
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-5">
              
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                   
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">Condos</h1>
                    <a href='https://my.flexmls.com/NancySotomayor/search/shared_links/A8sED/listings' target='_blank' className='bg-amber-300 hover:bg-amber-400 text-white font-bold rounded busc'> {t('search')}  </a>
                    <hr className='line'/>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">{t('homes')} </h1>
                    <a href='https://my.flexmls.com/NancySotomayor/search/shared_links/A8sA3/listings' target='_blank' className='bg-amber-300 hover:bg-amber-400 text-white font-bold rounded busc'> {t('search')}  </a>
                    <hr className='line'/>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">{t('land')} </h1>
                    <a href='https://my.flexmls.com/NancySotomayor/search/shared_links/A8sGm/listings' target='_blank' className='bg-amber-300 hover:bg-amber-400 text-white font-bold rounded busc'> {t('search')}  </a>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="./images/prop2.jpeg" alt="A group of People" />
                </div>
            </div>

            
        </div>
      <Contact/>
      <Footer/>
      <ButtonR/>
    </>
  )
}
