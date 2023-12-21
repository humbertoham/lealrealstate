import About from '@/components/about'
import Banner from '@/components/banner'
import ButtonR from '@/components/buttonr'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import RealState from '@/components/realstate'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
     
      <About/>
      <RealState/>
      <Contact/>
      <Footer/>
      <ButtonR/>
    </>
  )
}
