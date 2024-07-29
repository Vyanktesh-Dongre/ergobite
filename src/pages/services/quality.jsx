import Image from "next/image"
import img from "../../../public/quality.png"

const Quality = () => {

    return (
        <div className="bg-[#EFF5FD] pt-[53px] 3xl:max-w-[1920px] 3xl:mx-auto">
            <div className=" text-center">
                <h1 className="text-[#02033B] font-[500] text-[36px]">Quality Assurance and Testing</h1>
                        
            </div>
            <div className="px-5 xl:px-[304px] py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[48px]">
                    <div className="mt-10 sm:mt-0">
                        <Image className=" w-full h-full rounded-[10px] " src={img} alt="image"/>
                    </div>
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">Rigorous Testing</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2">We conduct extensive testing to ensure your product is bug-free, reliable, and performs optimally. Our QA team uses advanced testing tools and methodologies to identify and resolve issues before they impact users.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Automated and Manual Testing</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">Utilizing both automated and manual testing methods, we ensure thorough quality assurance. Our approach combines the efficiency of automation with the precision of manual testing.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Performance Optimization</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">Continuous monitoring and optimization to maintain high performance and user satisfaction. We fine-tune your product to ensure it runs smoothly under various conditions and workloads.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Quality