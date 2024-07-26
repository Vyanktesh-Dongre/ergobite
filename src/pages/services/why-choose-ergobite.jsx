
import Image from "next/image";
import img from '../../../public/rating.png'

const ChooseErgobite = () => {
    return (
        <div className="w-full py-10" style={{ background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)' }}>
            <div className="">
                <div className="text-center px-5 sm:px-0">
                    <h1 className="text-[36px] font-bold text-[#02033B]">Why Choose Ergobite</h1>
                    <h2 className="text-[18px]">Choose Ergobite for cutting-edge solutions, client-focused service, and a proven track record of success.</h2> 
                </div>
                <div className="w-full px-5 sm:px-0 gap-5 mt-10 lg:px-[15%] mx-auto lg:gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className="w-[98%] mx-auto bg-white rounded-xl">
                        <Image className="w-[55px] h-[55px] my-5 mx-5" src={img} alt="Rating" />
                        <h1 className="my-5 mx-5 text-[20px] sm:text-[31px] font-[600] text-[#02033B]">Expert Team</h1>
                        <p className="my-5 mx-5 text-[14px] sm:text-[17.51px]">
                        With years of experience in software development and a strong focus on AI and ML, we bring unparalleled expertise to every project.
                        </p>
                    </div>
                    <div className="w-[98%] mx-auto bg-white rounded-xl">
                        <Image className="w-[55px] h-[55px] my-5 mx-5" src={img} alt="Rating" />
                        <h1 className="my-5 mx-5 text-[20px] sm:text-[31px] font-[600] text-[#02033B]">Innovative Solutions</h1>
                        <p className="my-5 mx-5 text-[14px] sm:text-[17.51px]">
                        We are committed to delivering cutting-edge solutions that drive efficiency, growth, and competitive advantage.
                        </p>
                    </div>
                    <div className="w-[98%] mx-auto bg-white rounded-xl">
                        <Image className="w-[55px] h-[55px] my-5 mx-5" src={img} alt="Rating" />
                        <h1 className="my-5 mx-5 text-[20px] sm:text-[31px] font-[600] text-[#02033B]">Client-Centric Approach</h1>
                        <p className="my-5 mx-5 text-[14px] sm:text-[17.51px]">
                        Our clients are at the heart of everything we do. We work closely with you to understand your needs and deliver solutions that exceed your expectations.
                        </p>
                    </div>
                </div>
                <div className="w-full px-5 sm:px-0 sm:w-[75%] gap-5 mt-10 lg:px-[15%] mx-auto lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full mx-auto bg-white rounded-xl ">
                        <Image className="w-[55px] h-[55px] my-5 mx-5" src={img} alt="Rating" />
                        <h1 className="my-5 mx-5 text-[20px] sm:text-[31px] font-[600] text-[#02033B]">Proven Track Record</h1>
                        <p className="my-5 mx-5 text-[14px] sm:text-[17.51px]">
                        We are committed to delivering cutting-edge solutions that drive efficiency, growth, and competitive advantage.
                        </p>
                    </div>  
                    <div className="w-full mx-auto bg-white rounded-xl">
                        <Image className="w-[55px] h-[55px] my-5 mx-5" src={img} alt="Rating" />
                        <h1 className="my-5 mx-5 text-[20px] sm:text-[31px] font-[600] text-[#02033B]">Quality Assurance</h1>
                        <p className="my-5 mx-5 text-[14px] sm:text-[17.51px]">
                        Our clients are at the heart of everything we do. We work closely with you to understand your needs and deliver solutions that exceed your expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseErgobite;
