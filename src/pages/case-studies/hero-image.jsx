import Image from "next/image"
import img from '../../../public/casestudy.png'

const HeroImage = () => {

    return (
        <div className="relative w-full">
            <Image className="w-full h-[811px]" src={img} alt="hero-image"/>
                <div className=" absolute inset-0 md:w-[1100px] h-[150px] top-[260px] sm:left-5 lg:left-[400px] px-5 md:flex items-center justify-center">
                        <p className="sm:text-[60px] text-[60px] font-[800] text-white">Enhancing Refinery Data Analysis</p>
                    </div>
                    <div className='hidden sm:block absolute inset-0 top-[350px] w-[1100px] h-[82px] sm:left-5 lg:left-[405px] mt-[22px] px-12 '>
                        <p className=' text-[35px] font-[500] text-white'>With AI-Powered Categorization and Summarization Industry.</p>
                    </div>
                    <div className='absolute inset-0 top-[470px] w-[670px] h-[82px] px-5 sm:left-5 lg:left-[800px] mt-[17px] '>
                        <button className=" gap-[512px] rounded-[42px] w-[295px] h-[54.5px] bg-[#FFEF00] text-[#02033B] px-5">Book Free Consultation</button>
                </div>
        </div>
    )
}

export default HeroImage