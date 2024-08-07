import Image from "next/image"
import img from '../public/discover.png'

const Discover = () => {

    return (
        <div className="relative text-center 3xl:max-w-[1920px] 3xl:mx-auto">
            <Image className="w-full xl:h-[455px]" src={img} alt="discover image" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 md:px-9 px-2 flex items-center justify-center">
                <p className="text-white md:text-[36px] md:p-60 rounded">
                    Discover innovation-driven solutions tailored to elevate your product development journey. Partner with us to unlock new possibilities and achieve unparalleled success.
                </p>
            </div>
        </div>


    )
}

export default Discover