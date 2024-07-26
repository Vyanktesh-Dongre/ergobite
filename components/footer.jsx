import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import Image from "next/image"
import img from '../public/e.png'

const Footer = () => {

    return (
        <div className=" bg-black py-5 px-5 pb-12 lg:px-16 lg:py-16 2xl:pt-[123px] 2xl:px-[192px]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[400px_200px_200px_1fr] gap-10">
                <div>
                    <Image className="w-[216px] h-[54px]" src={img} alt="ergobite-image"/>
                    <p className="text-[#ffffff] w-full  sm:w-[322px] pt-[22px]">We offer comprehensive solutions in IT consulting, technology, and operations to meet the diverse needs of our clients</p>
                </div>
                <div className="text-[#ffffff]">
                    <h1>Useful Links</h1>
                    <ul>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Case Studies</button></li>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Careers</button></li>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Blogs</button></li>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Email</button></li>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Phone</button></li>
                    </ul>
                </div>
                <div className="text-[#ffffff]">
                    <h1>Help</h1>
                    <ul>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Pricacy Policy</button></li>
                        <li><button className="text-left text-[#FFEF00] py-2 w-full">Terms of Services</button></li>
                    </ul>
                </div>
                <div className="flex  text-[#ffffff]">
                    <h1>Find Us On</h1>
                    <div className="flex gap-x-9 ml-[55px] -mt-1">
                        <FaTwitterSquare className="w-[36px] h-[36px]"/>
                        <FaFacebookSquare className="w-[36px] h-[36px]"/>
                        <FaSquareYoutube  className="w-[36px] h-[36px]"/>
                    </div>
                </div>
            </div>
            <hr className='hidden lg:block md:mt-11 w-full border-[1px] border-[#E6E6E6] '></hr>
            <p className="text-white text-[11px] text-center mt-9">© 2024 Ergobite Tech Solutions Pvt Ltd. All rights reserved.</p>
        </div>
    )
}

export default Footer