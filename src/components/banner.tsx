

export default function Banner() {

  return (
    <div className=' mx-auto '>
    <div className=' relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full text-gray-200  bg-black/40 flex flex-col justify-center'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
          Las <span className='text-amber-200'>mejores</span>
        </h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
          <span className='text-amber-200'>propiedades</span> del mercado.
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
