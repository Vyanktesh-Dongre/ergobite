import Image from "next/image"
import img from '../../../public/serviceheroimage.png'

const HeroImage = () => {

    return (
        <div className="relative w-full">
            <Image className="w-full h-[811px]" src={img} alt="hero-image"/>
                <div className=" absolute inset-0 top-[10rem] md:w-full h-[150px] lg:top-[260px] px-5 md:flex items-center justify-center">
                        <p className="md:text-[60px] sm:text-[40px] text-[30px] font-[800] text-white">Product Development and Engineering</p>
                    </div>
                    <div className='absolute inset-0 w-full px-5 top-[20rem] sm:top-[20rem] lg:top-[25rem] lg:w-[1102px] lg:mx-auto lg:text-center '>
                        <p className=' text-[22px] sm:text-[28px] font-[500] text-white'>Transform your ideas into reality with our comprehensive product development and engineering 
                            services. We specialize in delivering innovative, high-quality products that meet your business needs.
                        </p>
                    </div>
                    <div className='absolute inset-0 gap-5 top-[40rem] w-full h-[82px] px-5 sm:top-[35rem] sm:left-5 sm:mt-[17px] md:flex items-center justify-center '>
                        <button className="mb-5 sm:mb-0 rounded-[42px] w-[295px] h-[54.5px] bg-[#FFEF00] text-[#02033B] px-5">Book a Discovery Call Today</button>
                        <button className=" rounded-[42px] w-[295px] h-[54.5px] bg-[#FFEF00] text-[#02033B] px-5">View Case Studies</button>
                </div>
        </div>
    )
}

export default HeroImage