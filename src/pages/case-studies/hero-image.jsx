import Image from "next/image"
import img from '../../../public/casestudy.png'

const HeroImage = () => {

    return (
        <div className="relative w-full">
            <Image className="w-full h-[40rem]  sm:h-[811px]" src={img} alt="hero-image"/>
                <div className=" absolute inset-0 md:w-full h-[150px] top-[10rem] sm:top-[260px] sm:left-5 px-5 md:flex items-center justify-center">
                        <p className="sm:text-[60px] text-[30px] font-[800] text-white">Enhancing Refinery Data Analysis</p>
                    </div>
                    <div className='sm:block absolute inset-0 sm:top-[25rem] top-[15rem] lg:top-[350px] w-full h-[82px] mt-[4rem] px-5 sm:pt-5 sm:px-12 md:px-12 md:flex items-center justify-center '>
                        <p className=' text-[22px] md:text-[35px] font-[500] text-white'>With AI-Powered Categorization and Summarization Industry.</p>
                    </div>
                    <div className='absolute inset-0 top-[25rem] mx-auto sm:top-[40rem] md:top-[35rem] w-full h-[82px] px-5 sm:left-5 mt-[17px] md:flex items-center justify-center '>
                        <button className="gap-[512px] rounded-[42px] w-[295px] h-[54.5px] bg-[#FFEF00] text-[#02033B] px-5">Book Free Consultation</button>
                </div>
        </div>
    )
}

export default HeroImage