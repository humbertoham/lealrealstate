"use client"
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration



export default function About() {
    const {t} = useTranslation()
    return (
      <>
        
        <section className="bg-white " id="acerca">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">{t('us')}</h2>
            <p className="mb-4">{t('who')}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="./images/about1.jpg" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./images/about2.jpg" alt="office content 2"/>
        </div>
    </div>
    
</section>
      s
      </>
    )
  }
  