import Image from "next/image"
import img from '../public/blkimg.png'


const ExpandingAI = () => {

    return (
        <section className="relative w-full">
            <div className="relative w-full h-[515px]">
                <Image className="w-full h-full object-cover" src={img} alt="company logo" />
                <div className="w-full">
                    <div className="absolute inset-0 flex pl-3  pt-[8%] justify-center">
                        <p className="text-[#FFEF00] text-[28px] md:text-[45px] ">Expanding the Horizons of AI</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center w-[90%] sm:w-[70%] mx-auto md:mt-[120px] mt-16  ">
                        <p className="text-white text-[16px] md:text-[22px]">Pushing boundaries in AI innovation: enhancing automation, insights, and decision-making for forward-thinking enterprises
                            <br />
                            <br /> 
                            At Ergobite, we are passionate about pushing the boundaries of what is possible with AI and ML. Our advanced AI modules are 
                            designed to tackle complex challenges, streamline operations, and drive innovation. We continuously invest in research and development 
                            to stay at the forefront of AI technology, ensuring that our clients benefit from the latest advancements.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
      
    )
}

export default ExpandingAI