import image from '../assets/karaokedanceparty.jpg'

export function HeroSection() {
  return (
    <div className="relative w-full pb-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex text-white max-w-max items-center space-x-2 rounded-full bg-[#0B8185] p-1">
            <div className="rounded-full bg-[#7c2b10d0] p-1 px-2">
              <p className="text-sm font-medium">Passionate&apos;</p>
            </div>
            <p className="text-sm font-medium">Find Your Interests &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
            Discover your favourite Events and <span className='text-[#0B8185] capitalize'>Team up with your matching peers!</span>
          </h1>
          <p className="mt-8 text-lg">
          a comprehensive platform that facilitates team formation,
           event discovery, efficient communication, and seamless coordination 
            among students, clubs, and event organizers!
          </p>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 rounded object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
