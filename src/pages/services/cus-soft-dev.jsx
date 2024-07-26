import Image from "next/image"
import img from "../../../public/customsoftdev.png"

const CustomSoftwareDevelopment = () => {
    return (
        <div className="bg-[#EFF5FD] pt-[53px]">
            <div className=" text-center">
                <h1 className="text-[#02033B] font-[500] text-[36px]">Custom Software Development</h1>
                        
            </div>
            <div className="px-5 xl:px-[304px] py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[48px]">
                    <div className="mt-10 sm:mt-0">
                        <Image className=" w-full h-full rounded-[10px]" src={img} alt="image"/>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">Tailored Solutions</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2">We provide bespoke software solutions that align perfectly with your business objectives
                           and requirements. Our team works closely with you to understand your vision and deliver software that meets your specific needs.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Agile Methodology</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">Our flexible, iterative approach ensures timely delivery and adaptability to changing 
                            needs. We prioritize transparency and collaboration, keeping you informed and involved throughout the development process.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Cutting-Edge Technologies</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">Leveraging the latest technologies, we build high-performance, scalable, and secure 
                           software. Our expertise spans various programming languages, frameworks, and platforms, ensuring the best fit for your project.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    ) 
}

export default CustomSoftwareDevelopment