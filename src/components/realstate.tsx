"use client"
import { FaUmbrellaBeach, FaPeace } from "react-icons/fa";
import { GiKnot } from "react-icons/gi";


import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration




export default function RealState() {
    const {t } = useTranslation()
    return (
      <>
<section className="bg-black" id="propiedades">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Real Estate</h2>
          <p className="text-white sm:text-xl ">{t('real')}</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="san">
              <div className="flex justify-left items-left mb-4 ">
                <FaUmbrellaBeach className="cab"/>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">San jose</h3>
              <p className="text-gray-300">{t('sanjose')}</p>
              <div className="flex justify-left items-left mb-4 ">
              <a href="/sanjose" className="bg-transparent  hover:bg-white text-white font-semibold hover:text-black mt-2 py-2 px-4 border border-white hover:border-transparent rounded">{t('search')}</a>
          </div></div>
          <div className="luc">
              <div className="flex justify-left items-left mb-4  ">
              <GiKnot className="cab"/>
              </div>
              <h3 className="mb-2 text-xl text-white font-bold ">Cabos San Lucas</h3>
              <p className="text-gray-300">{t('sanlucas')}</p>
              <div className="flex justify-left items-left mb-4 ">
              <a href="/sanlucas" className="bg-transparent  hover:bg-white text-white font-semibold hover:text-black mt-2 py-2 px-4 border border-white hover:border-transparent rounded">{t('search')}</a>
          </div>
          </div>
          <div className="paz">
              <div className="flex justify-left items-left mb-4">
              <FaPeace className="cab"/>

              </div>
              <h3 className="mb-2 text-xl font-bold text-white">La paz</h3>
              <p className=" text-gray-300"> {t('lapaz')}</p>
              <div className="flex justify-left items-left mb-4 ">
              <a href="lapaz" className="bg-transparent  hover:bg-white text-white font-semibold hover:text-black mt-2 py-2 px-4 border border-white hover:border-transparent rounded">{t('search')}</a>
          </div>
          </div>
       
      </div>
  </div>
</section>
  
 
      </>
    )
  }
  