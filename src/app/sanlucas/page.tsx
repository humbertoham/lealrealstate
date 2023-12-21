import About from '@/components/about'
import Banner from '@/components/banner'
import ButtonR from '@/components/buttonr'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import RealState from '@/components/realstate'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Work from '@/components/workwithus'
import Image from 'next/image'

export default function Sanlucas() {
  return (
    <>
      <Navbar/>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <h1 className="text-3xl lg:text-6xl font-bold leading-9 text-black pb-4">Cabos San Lucas</h1>
                    <p className="font-normal text-base leading-6 text-gray-700">Es tu oportunidad de sumergirte en un paraíso donde el lujo se encuentra con el océano y la emoción se entrelaza con la serenidad. Vive la experiencia de un estilo de vida único en un destino que combina sofisticación con la esencia relajada de la playa.</p>
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-5">
              
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                   
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">Condos</h1>
                    <a href='https://my.flexmls.com/NancySotomayor/search/shared_links/9foet/listings' target='_blank' className='bg-amber-300 hover:bg-amber-400 text-white font-bold rounded busc'> Buscar </a>
                    <hr className='line'/>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">Casas</h1>
                    <a href='https://my.flexmls.com/NancySotomayor/search/shared_links/9fohH/listings' target='_blank' className='bg-amber-300 hover:bg-amber-400 text-white font-bold rounded busc'> Buscar </a>
                    <hr className='line'/>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">Lotes</h1>
                    <a href='https://my.flexmls.com/NancySotomayor/search/shared_links/9foiA/listings' target='_blank' className='bg-amber-300 hover:bg-amber-400 text-white font-bold rounded busc'> Buscar </a>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="./images/prop1.jpeg" alt="A group of People" />
                </div>
            </div>

            
        </div>
      <Contact/>
      <Footer/>
      <ButtonR/>
    </>
  )
}