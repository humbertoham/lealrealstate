"use client"
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration




export default function Banner() {
  const {t} = useTranslation()
  return (
    <div className=' mx-auto '>
    <div className=' relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full text-gray-200  bg-black/40 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
          {t('the')} <span className='text-amber-200'>{t('best')} </span>
        </h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
          <span className='text-amber-200'>{t('prop')} </span> {t('market')} 
        </h1>
      </div>
      <img
        className='w-full max-h-[800px] object-cover'
        src='./images/banner.jpg'
        alt='/'
      />
    </div>
  </div>
  )
}
