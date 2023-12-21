import { FaUmbrellaBeach, FaPeace } from "react-icons/fa";
import { GiKnot } from "react-icons/gi";




export default function RealState() {
    return (
      <>
<section className="bg-black" id="propiedades">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Real State</h2>
          <p className="text-white sm:text-xl ">Estas exclusivas propiedades en Los Cabos representa la perfecta combinación entre lujo, estilo de vida relajado y un entorno natural incomparable. Con ubicaciones privilegiadas y comodidades de clase mundial, estas propiedades redefine el significado de la elegancia costera.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="san">
              <div className="flex justify-left items-left mb-4 ">
                <FaUmbrellaBeach className="cab"/>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">San jose</h3>
              <p className="text-gray-300">Ubicada en el extremo sur de la península de Baja California, es tu boleto para experimentar el lujo, la serenidad y la belleza natural que ofrece esta joya del Pacífico.</p>
              <div className="flex justify-left items-left mb-4 ">
              <a href="/sanjose" className="bg-transparent  hover:bg-white text-white font-semibold hover:text-black mt-2 py-2 px-4 border border-white hover:border-transparent rounded">Buscar</a>
          </div></div>
          <div className="luc">
              <div className="flex justify-left items-left mb-4  ">
              <GiKnot class="cab"/>
              </div>
              <h3 className="mb-2 text-xl text-white font-bold ">Cabos San Lucas</h3>
              <p className="text-gray-300">Es tu oportunidad de sumergirte en un paraíso donde el lujo se encuentra con el océano y la emoción se entrelaza con la serenidad. Vive la experiencia de un estilo de vida único en un destino que combina sofisticación con la esencia relajada de la playa.</p>
              <div className="flex justify-left items-left mb-4 ">
              <a href="/sanlucas" className="bg-transparent  hover:bg-white text-white font-semibold hover:text-black mt-2 py-2 px-4 border border-white hover:border-transparent rounded">Buscar</a>
          </div>
          </div>
          <div className="paz">
              <div className="flex justify-left items-left mb-4">
              <FaPeace class="cab"/>

              </div>
              <h3 className="mb-2 text-xl font-bold text-white">La paz</h3>
              <p className=" text-gray-300"> Estas propiedades te ofrecen una oportunidad única para sumergirse en la vibrante energía de La Paz, una ciudad que equilibra la tradición con la modernidad de una manera incomparable.</p>
              <div className="flex justify-left items-left mb-4 ">
              <a href="lapaz" className="bg-transparent  hover:bg-white text-white font-semibold hover:text-black mt-2 py-2 px-4 border border-white hover:border-transparent rounded">Buscar</a>
          </div>
          </div>
       
      </div>
  </div>
</section>
  
 
      </>
    )
  }
  