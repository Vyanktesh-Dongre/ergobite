
import Image from "next/image";
import img1 from '../public/odoo.png'
import img2 from '../public/aws.png'

const StrategicAlliances = () => {
    return (
        <>
            <div className="w-full mx-auto flex justify-center">
                <div className="md:w-[80%] gap-10 px-2 md:pl-24 md:pr-10 py-[1%] bg-black grid grid-cols-1 sm:grid-cols-2 rounded-[20px]" style={{ boxShadow: '0px 20px 24.7px 0px #E1E5EB80' }}>
                    <div className="my-auto">
                        <p className="text-white text-[40px]">Our Strategic Alliances</p>
                        <h3 className="hidden md:block text-white text-[20px]">We work with industry-leading partners to enhance our capabilities and deliver exceptional value to our clients.</h3>
            
                    </div>
                    <div className="md:flex items-center mb-5 sm:mb-0 px-5 gap-10">
                        <div className="bg-[#131517] rounded-xl mb-5 sm:mb-0  ">
                        {/* <Image className="w-[70%] h-[60%] mx-auto" src={img2} alt="company logo" /> */}
                        </div>
                        <div className="bg-[#131517] rounded-xl">
                        <Image className="w-[60%] h-[60%] mx-auto" src={img1} alt="company logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StrategicAlliances;



{/* <Image className="w-[70%] h-[60%]" src={img2} alt="company logo" />
 <Image className="w-[60%] h-[60%]" src={img1} alt="company logo" /> */}