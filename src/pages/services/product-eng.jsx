import Image from "next/image"
import img from "../../../public/prodeng.png"

const ProductEnginneering = () => {

    return (
        <div className="bg-[#EFF5FD] pt-10">
            <div className=" text-center">
                <h1 className="text-[#02033B] font-[500] text-[36px]">Product Engineering</h1>
                        
            </div>
            <div className="px-5 xl:px-[304px] md:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[48px]">
                    
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">Innovative Design</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2">Our team creates intuitive and user-friendly designs that enhance user experience and engagement. We focus on usability and aesthetics, crafting interfaces that are both functional and visually appealing.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Prototyping and MVP Development</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">We develop prototypes and minimum viable products (MVPs) to validate ideas and gather feedback early in the development process. This approach minimizes risks and ensures the final product meets user expectations.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Full-Stack Development</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">From front-end to back-end, we cover all aspects of product engineering to deliver comprehensive solutions. Our team is proficient in a wide range of technologies, enabling us to build robust and scalable applications.
                        </p>
                    </div>
                    <div className="">
                        <Image className=" w-full h-full rounded-[10px]" src={img} alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductEnginneering