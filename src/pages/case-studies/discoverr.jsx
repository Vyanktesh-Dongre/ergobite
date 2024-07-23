import Image from "next/image"
import img from '../../../public/discover.png'

const Discoverr = () => {

    return (
        <div className="text center">
            <Image className="w-full h-[629px]" src={img} alt="discover image" />
        </div>
    )
}

export default Discoverr