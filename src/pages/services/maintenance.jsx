import Image from "next/image"
import img from "../../../public/maintenance.png"

const MaintainenceAndSupport = () => {

    return (
        <div className="bg-[#EFF5FD] pt-10">
            <div className=" text-center">
                <h1 className="text-[#02033B] font-[500] text-[28px] sm:text-[36px]">Maintenance and Support</h1>
                        
            </div>
            <div className="px-5 xl:px-[304px] md:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[48px]">
                    
                    <div className="text-left">
                        <h1 className="text-[#02033B] font-[800] text-[19px]">Ongoing Support</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2">Our dedicated support team provides continuous assistance to address any issues and ensure smooth operation. We offer flexible support plans tailored to your needs.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Upgrades and Enhancements</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">Regular updates and feature enhancements to keep your product competitive and up-to-date. We help you stay ahead of the curve by incorporating the latest technologies and trends.
                        </p>
                        <h1 className="text-[#02033B] font-[800] text-[19px] pt-2">Prompt Support</h1>
                        <p className="text-[#02033B] font-[400] text-[16px] pt-2 ">Swift and efficient resolution of any critical issues. Our team is always available to ensure your product runs seamlessly, providing you with peace of mind.
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

export default MaintainenceAndSupport