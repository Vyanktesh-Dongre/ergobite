import Image from "next/image"
import img from '../../../public/serviceheroimage.png'

const HeroImage = () => {

    return (
        <div className="relative w-full">
            <Image className="w-full h-[811px]" src={img} alt="hero-image"/>
                <div className=" absolute inset-0 md:w-full h-[150px] top-[260px] sm:left-5 px-5 md:flex items-center justify-center">
                        <p className="sm:text-[60px] text-[60px] font-[800] text-white">Product Development and Engineering</p>
                    </div>
                    <div className='hidden sm:block absolute inset-0 top-[350px] w-[1100px] h-[82px] sm:left-5 lg:left-[405px] mt-[22px] px-12 '>
                        <p className=' text-[28px] font-[500] text-white'>Transform your ideas into reality with our comprehensive product development and engineering 
                            services. We specialize in delivering innovative, high-quality products that meet your business needs.
                        </p>
                    </div>
                    <div className='absolute inset-0 top-[470px] w-full h-[82px] px-5 sm:left-5 mt-[17px] md:flex items-center justify-center '>
                        <button className=" gap-[512px] rounded-[42px] w-[295px] h-[54.5px] bg-[#FFEF00] text-[#02033B] px-5">Book a Discovery Call Today</button>
                        <button className=" gap-[512px] rounded-[42px] w-[295px] h-[54.5px] bg-[#FFEF00] text-[#02033B] px-5">View Case Studies</button>
                </div>
        </div>
    )
}

export default HeroImage